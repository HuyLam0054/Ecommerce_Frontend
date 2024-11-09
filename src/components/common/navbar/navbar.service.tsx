"use client";
import Link from "next/link";
import * as React from "react";

export function Navbar_Service() {
  return (
    <div className="absolute -mt-3 -left-12 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 min-w-[260px] transform">
      <div className="relative top-2 p-6 bg-white rounded-xl shadow-xl w-full">
        <div className="w-10 h-10 bg-white transform rotate-45 absolute top-0 z-0 -translate-x-5 transition-transform group-hover:translate-x-10 duration-500 ease-in-out rounded-sm" />
        <div className="relative z-10">
          <ul className="text-[14px]">
            <li>
              <Link
                href="#"
                className="bg-transparent bg-clip-text text-transparent bg-gradient-to-br from-indigo-400 to-pink-700 via-blue-500 font-semibold hover:from-blue-600 hover:to-indigo-600 hover:via-pink-400 py-1 block"
              >
                Product Setup & Installation
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="bg-transparent bg-clip-text text-transparent bg-gradient-to-br from-indigo-400 to-pink-700 via-blue-500 font-semibold hover:from-blue-600 hover:to-indigo-600 hover:via-pink-400 py-1 block"
              >
                Repairs & Technical Support
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="bg-transparent bg-clip-text text-transparent bg-gradient-to-br from-indigo-400 to-pink-700 via-blue-500 font-semibold hover:from-blue-600 hover:to-indigo-600 hover:via-pink-400 py-1 block"
              >
                Product Personalization
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="bg-transparent bg-clip-text text-transparent bg-gradient-to-br from-indigo-400 to-pink-700 via-blue-500 font-semibold hover:from-blue-600 hover:to-indigo-600 hover:via-pink-400 py-1 block"
              >
                Trade-In Service
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="bg-transparent bg-clip-text text-transparent bg-gradient-to-br from-indigo-400 to-pink-700 via-blue-500 font-semibold hover:from-blue-600 hover:to-indigo-600 hover:via-pink-400 py-1 block"
              >
                Gift Wrapping Service
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
