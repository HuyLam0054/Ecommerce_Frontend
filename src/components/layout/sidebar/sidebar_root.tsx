"use client";
import { Cart_Button } from "@/components/common/buttons/cart.button";
import { Favorite_Button } from "@/components/common/buttons/favorite.button";
import { SignIn_Button } from "@/components/common/buttons/signin.button";
import { Signout_Button } from "@/components/common/buttons/signout.button";
import { SearchForm } from "@/components/common/forms/form.search";
import Link from "next/link";
import * as React from "react";
import { AiOutlineProduct } from "react-icons/ai";
import { FaInfo, FaNewspaper, FaRegStar } from "react-icons/fa";
import { IoIosArrowUp } from "react-icons/io";
import { LuMessageSquare } from "react-icons/lu";
import { RiCustomerService2Line } from "react-icons/ri";

export function Sidebar_Root() {
  const [openProducts, setOpenProducts] = React.useState<boolean>(false);
  const [openServices, setOpenServices] = React.useState<boolean>(false);
  const [openSpecial, setOpenSpecial] = React.useState<boolean>(false);
  return (
    <>
      <aside className="fixed top-[72px] right-0 z-40 w-64 h-[calc(100vh-72px)] transition-transform sm:translate-x-0 md:hidden">
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800 ">
          {/* Menu Product + service */}
          <ul className="space-y-2 block w-full mr-auto font-sans text-base antialiased font-normal leading-relaxed text-blue-gray-900">
            <li className="flex">
              <SignIn_Button />
              <ul className="flex items-center justify-center font-normal ml-4">
                <li className="flex relative group py-2 cursor-pointer hover:text-[green] hover:-mt-1 mx-2">
                  <Cart_Button />
                </li>
                <li className="flex relative group py-2 cursor-pointer hover:text-[red] hover:-mt-1 mx-2">
                  <Favorite_Button />
                </li>
              </ul>
            </li>
            <li>
              <SearchForm />
            </li>
            <li>
              <button
                type="button"
                onClick={() => {
                  setOpenProducts(!openProducts);
                  setOpenServices(false);
                  setOpenSpecial(false);
                }}
                className="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
              >
                <AiOutlineProduct />
                <span className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">
                  Products
                </span>
                <IoIosArrowUp
                  className={`${openProducts ? "rotate-180" : ""} duration-75`}
                />
              </button>
              <ul
                className={`overflow-hidden transition-all duration-100 ease-in-out ${
                  openProducts
                    ? "max-h-[1000px] opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <li>
                  <Link
                    href="#"
                    className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                  >
                    Iphone
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                  >
                    Ipad
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                  >
                    Watch
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                  >
                    Macbook
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                  >
                    Accessories
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <button
                type="button"
                onClick={() => {
                  setOpenServices(!openServices);
                  setOpenProducts(false);
                  setOpenSpecial(false);
                }}
                className="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
              >
                <RiCustomerService2Line className="" />
                <span className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">
                  Service
                </span>
                <IoIosArrowUp
                  className={`${openServices ? "rotate-180" : ""} duration-75`}
                />
              </button>
              <ul
                className={`overflow-hidden transition-all duration-100 ease-in-out ${
                  openServices
                    ? "max-h-[1000px] opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <li>
                  <Link
                    href="#"
                    className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                  >
                    Product Setup & Installation
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                  >
                    Repairs & Technical Support
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                  >
                    Product Personalization
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                  >
                    Trade-In Service
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                  >
                    Gift Wrapping Service
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
          <hr className="my-4 border-t-2 border-gray-300" />
          {/* Other */}
          <ul className="space-y-2 block w-full mr-auto font-sans text-base antialiased font-normal leading-relaxed text-blue-gray-900">
            <li>
              <button
                type="button"
                onClick={() => {
                  setOpenSpecial(!openSpecial);
                  setOpenServices(false);
                  setOpenProducts(false);
                }}
                className="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
              >
                <FaRegStar />
                <span className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">
                  Special Offer
                </span>
                <IoIosArrowUp
                  className={`${openSpecial ? "rotate-180" : ""} duration-75`}
                />
              </button>
              <ul
                className={`overflow-hidden transition-all duration-100 ease-in-out ${
                  openSpecial
                    ? "max-h-[1000px] opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <li>
                  <Link
                    href="#"
                    className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                  >
                    Direct Discount
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                  >
                    Bundle Offer
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                  >
                    Trade-In Program
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                  >
                    Education Store Discount
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                  >
                    Free Software/Service Offer
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                  >
                    Installment Payment Plan
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <button
                type="button"
                onClick={() => {}}
                className="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
              >
                <FaInfo />
                <span className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">
                  About us
                </span>
              </button>
            </li>
            <li>
              <button
                type="button"
                onClick={() => {}}
                className="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
              >
                <FaNewspaper />
                <span className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">
                  News
                </span>
              </button>
            </li>
            <li>
              <button
                type="button"
                onClick={() => {}}
                className="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
              >
                <RiCustomerService2Line className="" />
                <span className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">
                  Service
                </span>
              </button>
            </li>
            <li>
              <button
                type="button"
                className="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
              >
                <LuMessageSquare className="" />
                <span className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">
                  Inbox
                </span>
                <span className="text-red-500 dark:text-red-300 font-bold">
                  2
                </span>
              </button>
            </li>
          </ul>
          {/* Last */}
          <hr className="my-4 border-t-2 border-gray-300" />
          <div className="mt-auto mx-auto">
            <Signout_Button />
          </div>
        </div>
      </aside>
    </>
  );
}
