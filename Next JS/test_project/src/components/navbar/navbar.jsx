import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between p-4 bg-gray-800 text-white">
      <div className="text-lg font-bold">My Website</div>
      <ul className="flex space-x-4">
        <li><Link href="/" className="hover:underline">Home</Link></li>
        <li><Link href="/about" className="hover:underline">About</Link></li>
        <li><Link href="/items" className="hover:underline">Items</Link></li>
        <li><Link href="/contact_us" className="hover:underline">Contact Us</Link></li>
        
      </ul>
    </nav>
  );
}