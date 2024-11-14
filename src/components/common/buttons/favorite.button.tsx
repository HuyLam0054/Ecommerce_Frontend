"use client";

import * as React from "react";
import { FaHeart } from "react-icons/fa";
import { Indicator_Numb } from "../indicators/indicator_numb";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

interface numberInFavo {
  numb: number;
}
export function Favorite_Button({ numb }: numberInFavo) {
  const router = useRouter();
  const pathname = usePathname();
  return (
    <button
      aria-label="numb-favorite"
      onClick={() => router.push(`/favorites`)}
      className={`${
        pathname == `/favorites`
          ? "text-red-500"
          : "text-gray-600 dark:text-white hover:text-red-500"
      } flex flex-col items-center relative group py-2 cursor-pointer  mt-1 mx-auto`}
    >
      <div className="relative flex items-center justify-center">
        <FaHeart className="w-5 h-5" />
        {numb > 0 && <Indicator_Numb indicator_numb={numb} />}
      </div>
      <span className="text-sm mt-1 lg:hidden">Favorites</span>
    </button>
  );
}
