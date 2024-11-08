"use client";
import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Navbar_About,
  Navbar_Product,
  Navbar_Service,
  Navbar_Special,
  NavbarHelp,
} from "../../common/navbar";
import { MdMenuOpen } from "react-icons/md";
import { SearchForm } from "../../common/form/form.search";
import { FaCartArrowDown, FaHeart, FaSearch } from "react-icons/fa";
import { Indicator_Numb } from "../../common/indicator/indicator_numb";

export function NavbarRoot() {
  const [isDrawer, setIsDrawer] = React.useState<Boolean>(false);

  return (
    <nav className="bg-gray-200 border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-2xl hidden md:flex flex-wrap items-center justify-between mx-auto">
        <div className="items-center justify-between w-full md:flex md:w-auto text-sm ml-10">
          <ul className="flex items-center justify-center font-normal ">
            <li className="relative group px-3 py-2 cursor-pointer bg-transparent bg-clip-text text-transparent bg-gradient-to-br from-gray-600 to-gray-600 via-gray-600 font-sm hover:from-blue-800 hover:to-indigo-800 hover:via-pink-800 block">
              <Link href="#" className="cursor-pointer">
                Join Us
              </Link>
            </li>
            |
            <li className="relative group px-3 py-2 cursor-pointer bg-transparent bg-clip-text text-transparent bg-gradient-to-br from-gray-600 to-gray-600 via-gray-600 font-sm hover:from-blue-800 hover:to-indigo-800 hover:via-pink-800 block">
              <Link href="#" className="cursor-pointer">
                Address
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
        <div className="items-center justify-between w-full md:flex md:w-auto text-sm mr-10">
          <ul className="flex items-center justify-center font-normal ">
            <li className="flex relative group py-2 cursor-pointer hover:text-[green] hover:-mt-1 mx-2">
              <FaCartArrowDown className="w-5 h-5 mr-3" />
              <Indicator_Numb indicator_numb={2} />
            </li>
            <li className="flex relative group py-2 cursor-pointer hover:text-[red] hover:-mt-1 mx-2">
              <FaHeart className="w-5 h-5 mr-3" />
              <Indicator_Numb indicator_numb={2} />
            </li>
            <li className="relative group py-2 cursor-pointer hover:text-[green]">
              <button
                onClick={() => {}}
                type="button"
                className="font-medium rounded-lg text-sm px-4 py-2 md:p-3 focus:outline-none"
              >
                Sign In
              </button>
            </li>
          </ul>
        </div>
      </div>
      <div
        className={`max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto p-4`}
      >
        <Link
          href="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <Image
            width={500}
            height={500}
            src="https://www.svgrepo.com/show/69341/apple-logo.svg"
            alt=" Logo"
            className="h-8 w-8 ml-10 mr-2 lg:ml-20"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Apple
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
              <button className="cursor-pointer">About Us</button>
              <Navbar_About />
            </li>
            <li className="relative group px-3 py-2 cursor-pointer bg-transparent bg-clip-text text-transparent bg-gradient-to-br from-gray-600 to-gray-600 via-gray-600 font-sm hover:from-blue-800 hover:to-indigo-800 hover:via-pink-800 block">
              <Link href="#" className="cursor-pointer">
                News
              </Link>
            </li>
          </ul>
        </div>
        <div className="lg:flex md:order-2 hidden mr-10">
          <button
            type="button"
            className="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 me-1"
          >
            <FaSearch className="w-5 h-5 text-gray-400" />
          </button>
          <SearchForm />
          <button
            type="button"
            onClick={() => setIsDrawer(!isDrawer)}
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          >
            <MdMenuOpen className="w-5 h-5" />
          </button>
        </div>
      </div>
    </nav>
  );
}
