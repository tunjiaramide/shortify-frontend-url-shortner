import Link from "next/link";

export default function Header() {
    return (
      <div className="h-24 bg-gray-800 text-white flex items-center justify-center text-4xl font-bold">
        <Link href="/">Shot URL</Link>
      </div>
    );
  }
  
