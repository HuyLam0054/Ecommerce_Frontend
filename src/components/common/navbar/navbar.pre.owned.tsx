"use client";
import * as React from "react";
import Link from "next/link";

export function Navbar_Pre_owned() {
  return (
    <div className="absolute -mt-3 -left-2 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 w-[170px] transform">
      <div className="relative top-2 p-6 bg-white rounded-xl shadow-xl w-full">
        <div className="w-10 h-10 bg-white transform rotate-45 absolute top-0 z-0 -translate-x-4 transition-transform group-hover:translate-x-3 duration-500 ease-in-out rounded-sm"></div>
        <div className="relative z-10">
          <ul className="text-[15px]">
            <li>
              <Link
                href="#"
                className="text-gray-600 hover:text-gray-800 py-1 block font-normal"
              >
                Iphone Series
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="text-gray-600 hover:text-gray-800 py-1 block font-normal"
              >
                Ipad Series
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="text-gray-600 hover:text-gray-800 py-1 block font-normal"
              >
                Macbook
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="text-gray-600 hover:text-gray-800 py-1 block font-normal"
              >
                Other
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
