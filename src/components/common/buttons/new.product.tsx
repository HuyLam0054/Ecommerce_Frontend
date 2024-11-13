"use client";

import * as React from "react";
import { FaTag } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

export function New_Product_Button() {
  const router = useRouter();
  const pathname = usePathname();
  return (
    <button
      onClick={() => router.push(`/products/new`)}
      className={`${
        pathname == `/products/new`
          ? "text-red-500"
          : "text-gray-600 dark:text-white hover:text-red-500"
      } flex flex-col items-center relative group py-2 cursor-pointer  mt-1 mx-auto`}
    >
      <div className="relative flex items-center justify-center">
        <FaTag className="w-5 h-5" />
      </div>
      <span className="text-sm mt-1 lg:hidden">New</span>
    </button>
  );
}
