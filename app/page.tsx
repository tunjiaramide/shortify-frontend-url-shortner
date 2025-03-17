'use client';
import { useState } from "react";
import ShortenedURL from "./Components/ShortenedURL";
import UrlShortened from "./Components/UrlShortened";
import Content from "./Components/Content";


interface ShortenedURLType {
  shortUrl: string;
}


export default function Home() {
  const [shortenedURL, setShortenedURL] = useState<ShortenedURLType | null>(null);

  return (
    <div className="w-full max-w-[90%] sm:max-w-[75%] md:max-w-1/2 mx-auto items-center p-4
      md:flex md:flex-col md:justify-center">
      <h1 className="mb-4 text-2xl sm:text-3xl md:text-4xl text-blue-500 font-bold text-center">
        Fast, Free & Easy URL Shortening with Shoturl.co
      </h1>
      <ShortenedURL urlShortened={setShortenedURL} />
      <UrlShortened urlShortened={shortenedURL} />
      <Content />
    </div>
  );
}

