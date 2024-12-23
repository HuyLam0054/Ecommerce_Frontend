"use client";

import * as React from "react";
import Link from "next/link";
import {
  Navbar_Pre_owned,
  Navbar_Product,
  Navbar_Service,
  Navbar_Special,
} from "../../common/navbar";
import { SearchForm } from "../../common/forms/form.search";
import { Sidebar_Root } from "../sidebar/sidebar_root";
import { Cart_Button } from "@/components/common/buttons/cart.button";
import { Favorite_Button } from "@/components/common/buttons/favorite.button";
import { SignIn_Button } from "@/components/common/buttons/signin.button";
import { Message_Button } from "@/components/common/buttons/message.button";
import { FaApple } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import User_Button from "@/components/common/buttons/user.button";

export function NavbarRoot() {
  const [isSignin] = React.useState<boolean>(true);
  const router = useRouter();
  const pathname = usePathname();
  return (
    <nav className="bg-gray-200 border-gray-200 dark:bg-gray-900 fixed lg:block w-full z-50 ">
      <div className="max-w-screen-2xl hidden md:flex flex-wrap items-center justify-between mx-auto mt-2">
        <div className="items-center justify-between w-full md:flex md:w-auto text-sm ml-16">
          <ul className="flex items-center justify-center font-normal">
            <li className="relative group px-3 py-2 cursor-pointer bg-transparent bg-clip-text text-transparent bg-gradient-to-br from-gray-600 to-gray-600 via-gray-600 font-sm hover:from-blue-800 hover:to-indigo-800 hover:via-pink-800 block">
              <Link href="/help/about-us" className="cursor-pointer">
                About Us
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
            </li>
          </ul>
        </div>
        <div className="items-center justify-between w-full md:flex md:w-auto text-sm me-16 gap-6">
          <div className="hidden lg:flex flex-row gap-10 px-4">
            <Cart_Button numb={0} />
            <Favorite_Button numb={12} />
            <Message_Button numb={2} />
          </div>
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
          <FaApple className="h-8 w-8 lg:ml-20 dark:text-white -mt-1" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Brian Apple
          </span>
        </Link>
        <div className="items-center justify-between hidden w-full md:flex md:w-auto ">
          <ul className="flex items-center justify-center font-normal text-sm">
            <li
              className={`relative font-bold text-sm group px-3 py-2 cursor-pointer bg-transparent bg-clip-text text-transparent bg-gradient-to-br block ${
                pathname == "/products"
                  ? "from-blue-800 to-indigo-800 via-pink-800"
                  : "from-gray-600 to-gray-600 via-gray-600 font-sm hover:from-blue-800 hover:to-indigo-800 hover:via-pink-800"
              }`}
            >
              <button onClick={() => router.push("/products")} className="">
                Products
              </button>
              <Navbar_Product />
            </li>
            <li
              className={`relative font-bold text-sm group px-3 py-2 cursor-pointer bg-transparent bg-clip-text text-transparent bg-gradient-to-br block ${
                pathname == "/services"
                  ? "from-blue-800 to-indigo-800 via-pink-800"
                  : "from-gray-600 to-gray-600 via-gray-600 font-sm hover:from-blue-800 hover:to-indigo-800 hover:via-pink-800"
              }`}
            >
              <button
                onClick={() => router.push("/services")}
                className="cursor-pointer"
              >
                Service
              </button>
              <Navbar_Service />
            </li>
            <li
              className={`relative font-bold text-sm group px-3 py-2 cursor-pointer bg-transparent bg-clip-text text-transparent bg-gradient-to-br block ${
                pathname == "/special-offer"
                  ? "from-blue-800 to-indigo-800 via-pink-800"
                  : "from-gray-600 to-gray-600 via-gray-600 font-sm hover:from-blue-800 hover:to-indigo-800 hover:via-pink-800"
              }`}
            >
              <button
                onClick={() => router.push("/special-offer")}
                className="cursor-pointer"
              >
                Special Offer
              </button>
              <Navbar_Special />
            </li>
            <li
              className={`relative font-bold text-sm group px-3 py-2 cursor-pointer bg-transparent bg-clip-text text-transparent bg-gradient-to-br block ${
                pathname == "/products/pre-owned"
                  ? "from-blue-800 to-indigo-800 via-pink-800"
                  : "from-gray-600 to-gray-600 via-gray-600 font-sm hover:from-blue-800 hover:to-indigo-800 hover:via-pink-800"
              }`}
            >
              <button
                onClick={() => router.push("/products/pre-owned")}
                className="cursor-pointer hover:underline"
              >
                Pre-owned
              </button>
              <Navbar_Pre_owned />
            </li>
            <li
              className={`relative font-bold text-sm group px-3 py-2 cursor-pointer bg-transparent bg-clip-text text-transparent bg-gradient-to-br block ${
                pathname == "/news"
                  ? "from-blue-800 to-indigo-800 via-pink-800"
                  : "from-gray-600 to-gray-600 via-gray-600 font-sm hover:from-blue-800 hover:to-indigo-800 hover:via-pink-800"
              }`}
            >
              <button
                onClick={() => router.push("/news")}
                className="cursor-pointer"
              >
                News
              </button>
            </li>
          </ul>
        </div>
        <div className="relative group hidden md:block mr-2 lg:mr-20">
          {isSignin ? (
            <User_Button
              img={`/icons/facebook_icons.svg`}
              name={`Quang Huy Lam`}
              point={3300}
              isOpenSidebar={true}
            />
          ) : (
            <SignIn_Button />
          )}
        </div>
        <div className="lg:hidden md:order-2 lg:mr-10">
          <Sidebar_Root />
        </div>
      </div>
    </nav>
  );
}
