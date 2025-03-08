import { ClipboardIcon } from "lucide-react"; // Import the copy icon
import { useState } from "react";

interface UrlShortenedProps {
  urlShortened: { shortUrl: string } | null;
}

const UrlShortened: React.FC<UrlShortenedProps> = ({ urlShortened }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    if (urlShortened?.shortUrl) {
      try {
        await navigator.clipboard.writeText(urlShortened.shortUrl);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000); // Reset copy status after 2 seconds
      } catch (error) {
        console.error("Failed to copy:", error);
      }
    }
  };

  return (
    <div className="relative w-full max-w-md mx-auto mt-4">
      <div className="flex items-center bg-gray-100 border border-gray-300 rounded-md p-2">
        <input
          type="text"
          value={urlShortened?.shortUrl || "No URL generated yet"}
          readOnly
          className="w-full bg-transparent outline-none text-gray-800 text-sm px-2"
        />
        {urlShortened && (
          <button
            onClick={handleCopy}
            className="ml-2 text-gray-500 hover:text-blue-500 focus:outline-none"
          >
            <ClipboardIcon className="w-5 h-5" />
          </button>
        )}
      </div>
      {copied && <p className="text-sm text-blue-500 mt-1">Copied!</p>}
    </div>
  );
};

export default UrlShortened;
