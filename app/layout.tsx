import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Best URL shortener",
  description: "Free URL shortener to create the perfect short link",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
