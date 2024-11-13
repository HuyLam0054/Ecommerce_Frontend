"use client";
import * as React from "react";
import { Indicator_Numb } from "../indicators/indicator_numb";
import { FaRegMessage } from "react-icons/fa6";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

interface numberInMessage {
  numb: number;
}
export function Message_Button({ numb }: numberInMessage) {
  const router = useRouter();
  const pathname = usePathname();
  return (
    <button
      onClick={() => router.push(`/messages`)}
      className={`${
        pathname == `/messages`
          ? "text-blue-500"
          : "text-gray-600 dark:text-white hover:text-blue-500"
      } flex flex-col items-center relative group py-2 cursor-pointer  mt-1 mx-auto`}
    >
      <div className="relative flex items-center justify-center">
        <FaRegMessage className="w-5 h-5" />
        {numb > 0 && <Indicator_Numb indicator_numb={2} />}
      </div>
      <span className="text-sm mt-1 lg:hidden">Messages</span>
    </button>
  );
}
