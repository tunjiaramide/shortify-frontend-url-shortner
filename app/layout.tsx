import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

export const metadata: Metadata = {
  title: "URL Shortener - ShotURL",
  description: "ShotURL is a tool to shorten a long link and create a short URL easy to share on sites, chat, socialmedia and emails.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta property="og:title" content="ShortURL - URL Shortener" />
        <meta property="og:url" content="https://shoturl.co/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://shorturl.at/shoturl_logo.png" />
        <Script 
          src="https://www.googletagmanager.com/gtag/js?id=G-GJYYL87RQ1" 
          strategy="afterInteractive"
          />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-GJYYL87RQ1');
          `}
        </Script>
      </head>
      <body>
            <Header />
            <div className="w-full max-w-[90%] sm:max-w-[75%] md:max-w-1/2 mx-auto my-10">
              {children}
            </div>
            <Footer />
      </body>
    </html>
  );
}
