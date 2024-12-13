"use client";

// src/components/Sidebar.tsx
import { useState } from "react";
import Link from "next/link";

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div>
      {/* Sidebar for large screens */}
      <div
        className={`fixed top-0 left-0 h-full bg-gray-800 text-white p-4 transition-all duration-300 md:w-64 ${
          isSidebarOpen ? "block" : "hidden"
        } md:block`}
      >
        <ul className="space-y-4">
          <li>
            <Link href="/" className="block p-2 mt-12 rounded hover:bg-gray-700">
              Dashboard
            </Link>
          </li>
          <li>
            <Link
              href="/settings"
              className="block p-2 rounded hover:bg-gray-700"
            >
              Settings
            </Link>
          </li>
          <li>
            <Link href="/files" className="block p-2 rounded hover:bg-gray-700">
              Upload Files
            </Link>
          </li>
          <li>
            <Link href="/blog" className="block p-2 rounded hover:bg-gray-700">
              Blog
            </Link>
          </li>
        </ul>
      </div>

      {/* Sidebar toggle button for small screens */}
      <button
        onClick={toggleSidebar}
        className="md:hidden fixed top-0 left-0 m-4 p-3 bg-gray-800 text-white rounded z-50"
      >
        {isSidebarOpen ? "Close" : "Open"} Menu
      </button>
    </div>
  );
};

export default Sidebar;
