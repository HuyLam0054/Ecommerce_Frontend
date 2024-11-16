"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import { FaMedal } from "react-icons/fa";
import { Signout_Button } from "./signout.button";

interface UserButtonProps {
  name: string;
  img: string;
  point: number;
  isOpenSidebar: boolean;
}

export default function User_Button(props: UserButtonProps) {
  const [isOpenUserMenu, setIsOpenUserMenu] = React.useState<boolean>(false);

  const ranking =
    props.point <= 1000 ? "Silver" : props.point <= 3000 ? "Gold" : "Diamond";

  useEffect(() => {
    if (!props.isOpenSidebar) {
      setIsOpenUserMenu(false);
    }
  }, [props.isOpenSidebar]);

  return (
    <>
      <div className={`w-full`}>
        <button
          aria-label="Userdropdownbtn"
          onClick={() => setIsOpenUserMenu(!isOpenUserMenu)}
          className={`${
            isOpenUserMenu ? "bg-gray-300" : "hover:bg-gray-300"
          } flex w-full p-2.5 text-sm font-medium text-center rounded-lg items-center justify-center dark:bg-gray-900`}
        >
          <Image
            width={100}
            height={100}
            className="w-9 h-9 rounded-full cursor-pointer mr-2"
            src={props.img}
            alt="Userdropdown"
          />
          <div
            className={`w-full flex flex-col transition-all duration-500 overflow-hidden whitespace-nowrap`}
          >
            <span className="text-[13px] font-bold dark:text-gray-200">
              {props.name}
            </span>
            <span
              className={`${
                ranking === "Diamond"
                  ? "text-cyan-600"
                  : ranking === "Gold"
                  ? "text-orange-600"
                  : "text-gray-600"
              } flex text-[10px]`}
            >
              <FaMedal className="mt-1" />
              <span className="mr-2">{ranking}</span>

              <span>Point: {props.point}</span>
            </span>
          </div>
        </button>

        <div
          className={`${
            isOpenUserMenu ? "block" : "hidden"
          } mt-2 w-full md:absolute z-10 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600`}
        >
          <ul
            className={`${
              isOpenUserMenu ? "h-full" : "h-0"
            }py-2 text-sm text-gray-700 dark:text-gray-200 duration-500`}
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
