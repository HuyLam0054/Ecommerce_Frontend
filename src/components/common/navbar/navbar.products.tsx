/* eslint-disable @next/next/no-img-element */
import * as React from "react";
import Link from "next/link";

export interface INavbar_ProductProps {}

export function Navbar_Product(props: INavbar_ProductProps) {
  return (
    <div className="absolute -mt-3 -left-40 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 min-w-[500px] lg:min-w-[800px] transform">
      <div className="relative top-2 p-6 bg-white rounded-xl shadow-xl w-full">
        <div className="w-10 h-10 bg-white transform rotate-45 absolute top-0 z-0 translate-x-0 transition-transform group-hover:translate-x-[10rem] duration-500 ease-in-out rounded-sm" />
        <div className="relative z-10">
          <Link
            href="/"
            className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
          >
            New Products
            <p className="text-gray-500 font-normal">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation.
            </p>
          </Link>
          <div className="mt-3 grid grid-cols-3 lg:grid-cols-5 gap-6">
            <div>
              <p className="uppercase tracking-wider text-gray-500 text-[13px] font-extrabold ">
                iPhone
              </p>
              <ul className="mt-3 text-[15px]">
                <li>
                  <Link
                    href="#"
                    className="bg-transparent bg-clip-text text-transparent bg-gradient-to-br from-gray-600 to-gray-600 via-gray-600 font-sm hover:from-blue-800 hover:to-indigo-800 hover:via-pink-800 py-1 block"
                  >
                    iPhone 15 Series
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="bg-transparent bg-clip-text text-transparent bg-gradient-to-br from-gray-600 to-gray-600 via-gray-600 font-sm hover:from-blue-800 hover:to-indigo-800 hover:via-pink-800 py-1 block"
                  >
                    iPhone 14 Series
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="bg-transparent bg-clip-text text-transparent bg-gradient-to-br from-gray-600 to-gray-600 via-gray-600 font-sm hover:from-blue-800 hover:to-indigo-800 hover:via-pink-800 py-1 block"
                  >
                    iPhone 13 Series
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="bg-transparent bg-clip-text text-transparent bg-gradient-to-br from-gray-600 to-gray-600 via-gray-600 font-sm hover:from-blue-800 hover:to-indigo-800 hover:via-pink-800 py-1 block"
                  >
                    iPhone 12 Series
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="bg-transparent bg-clip-text text-transparent bg-gradient-to-br from-gray-600 to-gray-600 via-gray-600 font-sm hover:from-blue-800 hover:to-indigo-800 hover:via-pink-800 py-1 block"
                  >
                    iPhone 11 Series
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="bg-transparent bg-clip-text text-transparent bg-gradient-to-br from-gray-600 to-gray-600 via-gray-600 font-sm hover:from-blue-800 hover:to-indigo-800 hover:via-pink-800 py-1 block"
                  >
                    iPhone X Series
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="bg-transparent bg-clip-text text-transparent bg-gradient-to-br from-gray-600 to-gray-600 via-gray-600 font-sm hover:from-blue-800 hover:to-indigo-800 hover:via-pink-800 py-1 block"
                  >
                    iPhone 8 Series
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="bg-transparent bg-clip-text text-transparent bg-gradient-to-br from-gray-600 to-gray-600 via-gray-600 font-sm hover:from-blue-800 hover:to-indigo-800 hover:via-pink-800 py-1 block"
                  >
                    iPhone 7 Series
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <p className="uppercase tracking-wider text-gray-500 text-[13px] font-extrabold">
                ipad
              </p>
              <ul className="mt-3 text-[15px]">
                <li>
                  <Link
                    href="#"
                    className="bg-transparent bg-clip-text text-transparent bg-gradient-to-br from-gray-600 to-gray-600 via-gray-600 font-sm hover:from-blue-800 hover:to-indigo-800 hover:via-pink-800 py-1 block"
                  >
                    iPad Pro
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="bg-transparent bg-clip-text text-transparent bg-gradient-to-br from-gray-600 to-gray-600 via-gray-600 font-sm hover:from-blue-800 hover:to-indigo-800 hover:via-pink-800 py-1 block"
                  >
                    iPad Air
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="bg-transparent bg-clip-text text-transparent bg-gradient-to-br from-gray-600 to-gray-600 via-gray-600 font-sm hover:from-blue-800 hover:to-indigo-800 hover:via-pink-800 py-1 block"
                  >
                    iPad Gen
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="bg-transparent bg-clip-text text-transparent bg-gradient-to-br from-gray-600 to-gray-600 via-gray-600 font-sm hover:from-blue-800 hover:to-indigo-800 hover:via-pink-800 py-1 block"
                  >
                    iPad Mini
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <p className="uppercase tracking-wider text-gray-500 text-[13px] font-extrabold">
                Watch
              </p>
              <ul className="mt-3 text-[15px]">
                <li>
                  <Link
                    href="#"
                    className="bg-transparent bg-clip-text text-transparent bg-gradient-to-br from-gray-600 to-gray-600 via-gray-600 font-sm hover:from-blue-800 hover:to-indigo-800 hover:via-pink-800 py-1 block"
                  >
                    Watch Series Ultra
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="bg-transparent bg-clip-text text-transparent bg-gradient-to-br from-gray-600 to-gray-600 via-gray-600 font-sm hover:from-blue-800 hover:to-indigo-800 hover:via-pink-800 py-1 block"
                  >
                    Watch Series 8
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="bg-transparent bg-clip-text text-transparent bg-gradient-to-br from-gray-600 to-gray-600 via-gray-600 font-sm hover:from-blue-800 hover:to-indigo-800 hover:via-pink-800 py-1 block"
                  >
                    Watch Series 7
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="bg-transparent bg-clip-text text-transparent bg-gradient-to-br from-gray-600 to-gray-600 via-gray-600 font-sm hover:from-blue-800 hover:to-indigo-800 hover:via-pink-800 py-1 block"
                  >
                    Watch Series 6
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="bg-transparent bg-clip-text text-transparent bg-gradient-to-br from-gray-600 to-gray-600 via-gray-600 font-sm hover:from-blue-800 hover:to-indigo-800 hover:via-pink-800 py-1 block"
                  >
                    Watch Series SE
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="bg-transparent bg-clip-text text-transparent bg-gradient-to-br from-gray-600 to-gray-600 via-gray-600 font-sm hover:from-blue-800 hover:to-indigo-800 hover:via-pink-800 py-1 block"
                  >
                    Watch Series 5
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="bg-transparent bg-clip-text text-transparent bg-gradient-to-br from-gray-600 to-gray-600 via-gray-600 font-sm hover:from-blue-800 hover:to-indigo-800 hover:via-pink-800 py-1 block"
                  >
                    Watch Series 4
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="bg-transparent bg-clip-text text-transparent bg-gradient-to-br from-gray-600 to-gray-600 via-gray-600 font-sm hover:from-blue-800 hover:to-indigo-800 hover:via-pink-800 py-1 block"
                  >
                    Watch Series 3
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <p className="uppercase tracking-wider text-gray-500 text-[13px] font-extrabold">
                MacBook
              </p>
              <ul className="mt-3 text-[15px]">
                <li>
                  <Link
                    href="#"
                    className="bg-transparent bg-clip-text text-transparent bg-gradient-to-br from-gray-600 to-gray-600 via-gray-600 font-sm hover:from-blue-800 hover:to-indigo-800 hover:via-pink-800 py-1 block"
                  >
                    MacBook Pro
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="bg-transparent bg-clip-text text-transparent bg-gradient-to-br from-gray-600 to-gray-600 via-gray-600 font-sm hover:from-blue-800 hover:to-indigo-800 hover:via-pink-800 py-1 block"
                  >
                    MacBook Air
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <p className="uppercase tracking-wider text-gray-500 text-[13px] font-extrabold">
                Accessories
              </p>
              <ul className="mt-3 text-[15px]">
                <li>
                  <Link
                    href="#"
                    className="bg-transparent bg-clip-text text-transparent bg-gradient-to-br from-gray-600 to-gray-600 via-gray-600 font-sm hover:from-blue-800 hover:to-indigo-800 hover:via-pink-800 py-1 block"
                  >
                    Headphone
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="bg-transparent bg-clip-text text-transparent bg-gradient-to-br from-gray-600 to-gray-600 via-gray-600 font-sm hover:from-blue-800 hover:to-indigo-800 hover:via-pink-800 py-1 block"
                  >
                    Charger
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="bg-transparent bg-clip-text text-transparent bg-gradient-to-br from-gray-600 to-gray-600 via-gray-600 font-sm hover:from-blue-800 hover:to-indigo-800 hover:via-pink-800 py-1 block"
                  >
                    Other Accessories
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
