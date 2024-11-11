"use client";
import * as React from "react";
import Link from "next/link";
import {
  Navbar_Pre_owned,
  Navbar_Product,
  Navbar_Service,
  Navbar_Special,
  NavbarHelp,
} from "../../common/navbar";
import { MdMenuOpen } from "react-icons/md";
import { SearchForm } from "../../common/forms/form.search";
import { Sidebar_Root } from "../sidebar/sidebar_root";
import { Cart_Button } from "@/components/common/buttons/cart.button";
import { Favorite_Button } from "@/components/common/buttons/favorite.button";
import { SignIn_Button } from "@/components/common/buttons/signin.button";
import { Inbox_Button } from "@/components/common/buttons/inbox.button";
import { FaApple } from "react-icons/fa";

export function NavbarRoot() {
  const [isOpenSidebar, setIsOpenSidebar] = React.useState<boolean>(false);

  return (
    <nav className="bg-gray-200 border-gray-200 dark:bg-gray-900 fixed lg:block w-full z-50 ">
      <div className="max-w-screen-2xl hidden md:flex flex-wrap items-center justify-between mx-auto mt-2">
        <div className="items-center justify-between w-full md:flex md:w-auto text-sm ml-16">
          <ul className="flex items-center justify-center font-normal ">
            <li className="relative group px-3 py-2 cursor-pointer bg-transparent bg-clip-text text-transparent bg-gradient-to-br from-gray-600 to-gray-600 via-gray-600 font-sm hover:from-blue-800 hover:to-indigo-800 hover:via-pink-800 block">
              <Link href="#" className="cursor-pointer">
                Join Us
              </Link>
            </li>
            |
            <li className="relative group px-3 py-2 cursor-pointer bg-transparent bg-clip-text text-transparent bg-gradient-to-br from-gray-600 to-gray-600 via-gray-600 font-sm hover:from-blue-800 hover:to-indigo-800 hover:via-pink-800 block">
              <Link href="#" className="cursor-pointer">
                Store
              </Link>
            </li>
            |
            <li className="relative group px-3 py-2 cursor-pointer bg-transparent bg-clip-text text-transparent bg-gradient-to-br from-gray-600 to-gray-600 via-gray-600 font-sm hover:from-blue-800 hover:to-indigo-800 hover:via-pink-800 block">
              <Link href="#" className="cursor-pointer ">
                Address
              </Link>
            </li>
            |
            <li className="relative group px-3 py-2 cursor-pointer bg-transparent bg-clip-text text-transparent bg-gradient-to-br from-gray-600 to-gray-600 via-gray-600 font-sm hover:from-blue-800 hover:to-indigo-800 hover:via-pink-800 block">
              <Link href="#" className="cursor-pointer ">
                Help
              </Link>
              <NavbarHelp />
            </li>
          </ul>
        </div>
        <div className="items-center justify-between w-full md:flex md:w-auto text-sm me-16 gap-6">
          <Cart_Button />
          <Favorite_Button />
          <Inbox_Button />
          <SearchForm />
        </div>
      </div>
      <div
        className={`max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto p-4`}
      >
        <Link
          href="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <FaApple className="h-8 w-8 lg:ml-20 dark:text-white" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap mt-1 dark:text-white">
            Brian Apple
          </span>
        </Link>
        <div className="items-center justify-between hidden w-full md:flex md:w-auto ">
          <ul className="flex items-center justify-center font-normal text-sm">
            <li className="relative group px-3 py-2 cursor-pointer bg-transparent bg-clip-text text-transparent bg-gradient-to-br from-gray-600 to-gray-600 via-gray-600 font-sm hover:from-blue-800 hover:to-indigo-800 hover:via-pink-800 block">
              <button className="">Products</button>
              <Navbar_Product />
            </li>
            <li className="relative group px-3 py-2 cursor-pointer bg-transparent bg-clip-text text-transparent bg-gradient-to-br from-gray-600 to-gray-600 via-gray-600 font-sm hover:from-blue-800 hover:to-indigo-800 hover:via-pink-800 block">
              <button className="cursor-pointer">Service</button>
              <Navbar_Service />
            </li>
            <li className="relative group px-3 py-2 cursor-pointer bg-transparent bg-clip-text text-transparent bg-gradient-to-br from-gray-600 to-gray-600 via-gray-600 font-sm hover:from-blue-800 hover:to-indigo-800 hover:via-pink-800 block">
              <button className="cursor-pointer">Special Offer</button>
              <Navbar_Special />
            </li>
            <li className="relative group px-3 py-2 cursor-pointer bg-transparent bg-clip-text text-transparent bg-gradient-to-br from-gray-600 to-gray-600 via-gray-600 font-sm hover:from-blue-800 hover:to-indigo-800 hover:via-pink-800 block">
              <button className="cursor-pointer">Pre-owned</button>
              <Navbar_Pre_owned />
            </li>
            <li className="relative group px-3 py-2 cursor-pointer bg-transparent bg-clip-text text-transparent bg-gradient-to-br from-gray-600 to-gray-600 via-gray-600 font-sm hover:from-blue-800 hover:to-indigo-800 hover:via-pink-800 block">
              <Link href="#" className="cursor-pointer">
                News
              </Link>
            </li>
          </ul>
        </div>
        <div className="relative group hidden md:block mr-2 lg:mr-20">
          <SignIn_Button />
        </div>
        <div className="lg:hidden md:order-2 lg:mr-10">
          <button
            type="button"
            onClick={() => setIsOpenSidebar(!isOpenSidebar)}
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          >
            <MdMenuOpen className="w-5 h-5" />
          </button>
          {isOpenSidebar && <Sidebar_Root />}
        </div>
      </div>
    </nav>
  );
}
