"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import Script from "next/script";

export default function CallbackPage() {
  const router = useRouter();

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const authCode = urlParams.get("code");

    if (authCode) {
      fetch("/api/anilist/token", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code: authCode }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.access_token) {
            Cookies.set("anilistAuthToken", data.access_token, { expires: 30 });
            router.push("/");
          } else {
            console.error("No access token in response", data);
          }
        })
        .catch((err) => console.error("Fetch error:", err));
    }
  }, []);

  return (
    <div className="flex justify-center items-center h-screen bg-gray-900 text-white">
      <p>Logging you in...</p>
      <Script
        src="https://cdn.jsdelivr.net/npm/eruda"
        strategy="afterInteractive"
        onLoad={() => {
          if (typeof window !== "undefined" && window.eruda && !window.eruda._isInit) {
            window.eruda.init();
            window.eruda._isInit = true;
          }
        }}
      />
    </div>
  );
}
