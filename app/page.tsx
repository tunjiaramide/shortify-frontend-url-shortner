'use client';
import { useState } from "react";
import ShortenedURL from "./components/ShortenedURL";
import UrlShortened from "./components/UrlShortened";


interface ShortenedURLType {
  shortUrl: string;
}


export default function Home() {
  const [shortenedURL, setShortenedURL] = useState<ShortenedURLType | null>(null);

  return (
    <div className="w-1/2 h-screen flex flex-col mx-auto items-center justify-center">
      <h1 className="mb-4 text-4xl text-blue-500 font-bold">Best and Fast URL Shortener</h1>
      <ShortenedURL urlShortened={setShortenedURL} />
      <UrlShortened urlShortened={shortenedURL} />
    </div>
  );
}

