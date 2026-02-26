export default function AboutPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white p-6">
      <div className="max-w-md text-center">
        <h1 className="text-3xl font-bold mb-4">About animaru</h1>
        <p className="mb-4">
          animaru is an experimental anime streaming web page, expect many bugs and missing features. 
        </p>
        <a
          href="https://github.com/anime-kun32"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:underline"
        >
          Original template by anime-kun32 on GitHub, reworked by semicolonenjoyer
        </a>
      </div>
    </div>
  );
}
