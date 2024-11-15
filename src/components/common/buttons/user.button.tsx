"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaMedal } from "react-icons/fa";
import { Signout_Button } from "./signout.button";

interface UserButtonProps {
  name: string;
  img: string;
  point: number;
}

export default function User_Button(props: UserButtonProps) {
  const [isOpenUserMenu, setIsOpenUserMenu] = React.useState<boolean>(false);

  const ranking =
    props.point <= 1000 ? "Silver" : props.point <= 3000 ? "Gold" : "Diamond";

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
                ranking === "Diamond"
                  ? "text-cyan-600"
                  : ranking === "Gold"
                  ? "text-orange-600"
                  : "text-gray-600"
              } flex text-[12px] mx-1`}
            >
              <FaMedal className="mt-0.5" />
              <span className="">{ranking}</span>
              <span className="ml-2">Point: {props.point}</span>
            </span>
          </div>
        </button>

        <div
          className={`${
            isOpenUserMenu ? "block" : "hidden"
          } mt-2 w-full md:absolute z-10 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600`}
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
            <Signout_Button />
          </div>
        </div>
      </div>
    </>
  );
}
