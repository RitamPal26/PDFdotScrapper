"use client";

import { UserButton } from "@clerk/nextjs";
import Link from 'next/link';


// src/components/Navbar.tsx
const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-900 text-white py-4 px-6 z-50">
      <div className="flex justify-between items-center">
        <div className="text-lg font-semibold">PDF Scrapper</div>
        <div>
          <Link href="/" className="text-white hover:text-gray-400 mr-4">
            Home
          </Link>
          <Link href="/about" className="text-white hover:text-gray-400 mr-4">
            About
          </Link>
          <Link href="/about" className="text-white hover:text-gray-400">
            Settings
          </Link>
          <UserButton showName />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
