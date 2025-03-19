import Link from "next/link";

export default function Footer() {
  return (
    <div className="h-24 bg-gray-800 text-white flex flex-col items-center justify-center">
      
      <ul className="flex space-x-6">
        <li><Link href="/" className="hover:underline">Home</Link></li>
        <li><Link href="/terms-of-service" className="hover:underline">Terms of Service</Link></li>
        <li><Link href="/privacy-policy" className="hover:underline">Privacy Policy</Link></li>
      </ul>
      
      <p className="mt-3 text-sm">
        &copy; 2025 <Link href="https://shoturl.co" className="hover:underline">Shoturl.co</Link> - A simple and fast URL shortener tool.
      </p>
      
    </div>
  );
}
