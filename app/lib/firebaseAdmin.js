import { cert, getApps, initializeApp } from 'firebase-admin/app'
import { getAuth } from 'firebase-admin/auth'
import { getFirestore } from 'firebase-admin/firestore'

const createDisabledService = (serviceName, reason) =>
  new Proxy(
    {},
    {
      get() {
        return () => {
          throw new Error(`${serviceName} is disabled: ${reason}`)
        }
      },
    }
  )

let auth = null
let db = null
let firebaseInitError = null

const serviceAccountKey = process.env.FIREBASE_SERVICE_ACCOUNT_KEY

if (!serviceAccountKey) {
  firebaseInitError = 'FIREBASE_SERVICE_ACCOUNT_KEY is not set.'
} else {
  try {
    const serviceAccount = JSON.parse(serviceAccountKey)

    if (!getApps().length) {
      initializeApp({
        credential: cert(serviceAccount),
      })
    }

    auth = getAuth()
    db = getFirestore()
  } catch (error) {
    firebaseInitError = error?.message || 'Failed to initialize Firebase Admin.'
  }
}

const firebaseEnabled = Boolean(auth && db)

if (!firebaseEnabled) {
  const reason = firebaseInitError || 'Firebase disabled by configuration.'
  auth = createDisabledService('Firebase Auth', reason)
  db = createDisabledService('Firestore', reason)

  const warningKey = '__ANITEAMS_FIREBASE_WARNING__'
  if (!globalThis[warningKey]) {
    console.warn(`[firebaseAdmin] ${reason}`)
    globalThis[warningKey] = true
  }
}

export { auth, db, firebaseEnabled, firebaseInitError }
