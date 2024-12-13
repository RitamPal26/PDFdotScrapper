"use client";

import { SignedIn, SignedOut } from "@clerk/nextjs";
import Navbar from "./components/Navbar"; // Assuming Navbar is in components folder
import Sidebar from "./components/Sidebar"; // Assuming Sidebar is in components folder

export default function HomePage() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar />

      <div className="flex-1 md:ml-64">
        {/* Navbar */}
        <Navbar />

        {/* Main Content */}
        <main className="flex flex-col items-center justify-center min-h-screen bg-white p-6">
          <div className="text-center max-w-2xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-800 mb-6">
              Welcome to PDF Scrapper
            </h1>

            <SignedIn>
              <p className="text-lg text-gray-600 mb-6">
                You are signed in! 🎉
              </p>
            </SignedIn>
            <SignedOut>         
            </SignedOut>
          </div>
        </main>
      </div>
    </div>
  );
}
