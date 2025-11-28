"use client";
import { User } from "next-auth";
import { signOut, signIn } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";

type HeaderClientProps = {
  user: User | null;
};

const HeaderClient = ({ user }: HeaderClientProps) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleLogin = () => {
    signIn("auth0"); // Redirige al login de Auth0
  };

  const handleLogout = () => {
    setDropdownOpen(false);
    signOut();
  };

  return (
    <header className="w-full bg-white dark:bg-gray-900 shadow flex justify-between items-center px-6 py-4">
      <Link href="/">
        <div className="text-xl font-bold tracking-tight cursor-pointer">
          Product Catalog
        </div>
      </Link>
      <div className="relative">
        {user ? (
          <div className="relative">
            <button
              onClick={() => setDropdownOpen((prev) => !prev)}
              className="flex items-center gap-2 px-4 py-2 rounded-md bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none"
            >
              <span>Welcome, {user.name}</span>
              <svg
                width="20"
                height="20"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="ml-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md shadow-lg z-10">
                <ul className="py-1">
                  <li>
                    <button
                      onClick={handleLogout}
                      className="w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 text-sm"
                    >
                      Logout
                    </button>
                  </li>
                </ul>
              </div>
            )}
          </div>
        ) : (
          <button
            onClick={handleLogin}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Login
          </button>
        )}
      </div>
    </header>
  );
};

export default HeaderClient;