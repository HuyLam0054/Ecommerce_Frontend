"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaMedal } from "react-icons/fa";

interface UserButtonProps {
  name: string;
  img: string;
}

export default function User_Button(props: UserButtonProps) {
  const [isOpenUserMenu, setIsOpenUserMenu] = React.useState<boolean>(false);
  const [ranking] = React.useState<number>(1);
  // , setRanking
  return (
    <>
      <div className="max-w-lg min-w-28">
        <button
          aria-label="Userdropdownbtn"
          onClick={() => setIsOpenUserMenu(!isOpenUserMenu)}
          className={`${
            isOpenUserMenu ? "bg-gray-300" : "hover:bg-gray-300"
          } flex flex-row p-2 rounded-2xl my-auto bg-gray-300 dark:bg-gray-200`}
        >
          <Image
            width={100}
            height={100}
            className="w-9 h-9 rounded-full cursor-pointer"
            src={props.img}
            alt="Userdropdown"
          />
          <div className="flex flex-col">
            <span className="text-[13px] ml-2 font-bold justify-start">
              {props.name}
            </span>
            <span
              className={`${
                ranking === 1
                  ? "text-cyan-600"
                  : ranking === 2
                  ? "text-orange-600"
                  : "text-gray-600"
              } flex text-[12px] ml-2`}
            >
              <FaMedal className="mt-0.5" />
              <span className="mx-2">
                {ranking === 1 ? "Diamond" : ranking === 2 ? "Gold" : "Silver"}
              </span>
              <span className="">Point: 400</span>
            </span>
          </div>
        </button>

        <div
          className={`${
            isOpenUserMenu ? "block" : "hidden"
          } mt-2 w-full lg:absolute z-10 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600`}
        >
          <ul
            className="py-2 text-sm text-gray-700 dark:text-gray-200"
            aria-labelledby="avatarButton"
          >
            <li>
              <Link
                href="#"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Dashboard
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Settings
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Earnings
              </Link>
            </li>
          </ul>
          <div className="py-1">
            <Link
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
            >
              Sign out
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
