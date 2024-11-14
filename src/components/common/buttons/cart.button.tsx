"use client";

import * as React from "react";
import { FaCartArrowDown } from "react-icons/fa";
import { Indicator_Numb } from "../indicators/indicator_numb";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

interface numberInCart {
  numb: number;
}

export function Cart_Button({ numb }: numberInCart) {
  const router = useRouter();
  const pathname = usePathname();
  return (
    <button
      aria-label="numb-in-cart"
      onClick={() => router.push(`/cart`)}
      className={`${
        pathname == `/cart`
          ? "text-green-500"
          : "text-gray-600 dark:text-white hover:text-green-500"
      } flex flex-col items-center relative group py-2 cursor-pointer  mt-1 mx-auto`}
    >
      <div className="relative flex items-center justify-center">
        <FaCartArrowDown className="w-5 h-5" />
        {numb > 0 && <Indicator_Numb indicator_numb={numb} />}
      </div>
      <span className="text-sm mt-1 lg:hidden">Cart</span>
    </button>
  );
}
