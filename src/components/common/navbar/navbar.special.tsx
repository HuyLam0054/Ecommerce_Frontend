/* eslint-disable @next/next/no-img-element */
import * as React from "react";
import Link from "next/link";

export interface INavbar_SpecialProps {}

export function Navbar_Special(props: INavbar_SpecialProps) {
  return (
    <div className="absolute -mt-3 -left-56 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 min-w-[500px] lg:min-w-[700px] transform">
      <div className="relative top-2 p-6 bg-white rounded-xl shadow-xl w-full">
        <div className="w-10 h-10 bg-white transform rotate-45 absolute top-0 z-0 translate-x-0 transition-transform group-hover:translate-x-[15rem] duration-500 ease-in-out rounded-sm"></div>
        <div className="relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            <div>
              <p className="uppercase tracking-wider text-gray-500 font-medium text-[13px]">
                iPhone
              </p>
              <ul className="mt-3 text-[15px]">
                <li>
                  <Link
                    href="#"
                    className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                  >
                    Course Editor
                    <p className="text-gray-500 font-normal">
                      All-in-one editor
                    </p>
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                  >
                    Accept payments
                    <p className="text-gray-500 font-normal">
                      Pre-build payments page
                    </p>
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                  >
                    Closed Captioning
                    <p className="text-gray-500 font-normal">
                      Use AI to generate captions
                    </p>
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <p className="uppercase tracking-wider text-gray-500 font-medium text-[13px]">
                iPad
              </p>
              <ul className="mt-3 text-[15px]">
                <li>
                  <Link
                    href="#"
                    className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                  >
                    Plugins
                    <p className="text-gray-500 font-normal">
                      Tweak existing functionality
                    </p>
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                  >
                    Batch uploads
                    <p className="text-gray-500 font-normal">
                      Get your time back
                    </p>
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                  >
                    Social sharing
                    <p className="text-gray-500 font-normal">
                      Generate content for socials
                    </p>
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <p className="uppercase tracking-wider text-gray-500 font-medium text-[13px]">
                Watch
              </p>
              <ul className="mt-3 text-[15px]">
                <li>
                  <Link
                    href="#"
                    className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                  >
                    Plugins
                    <p className="text-gray-500 font-normal">
                      Tweak existing functionality
                    </p>
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                  >
                    Batch uploads
                    <p className="text-gray-500 font-normal">
                      Get your time back
                    </p>
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                  >
                    Social sharing
                    <p className="text-gray-500 font-normal">
                      Generate content for socials
                    </p>
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <p className="uppercase tracking-wider text-gray-500 font-medium text-[13px]">
                MacBook
              </p>
              <ul className="mt-3 text-[15px]">
                <li>
                  <Link
                    href="#"
                    className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                  >
                    Plugins
                    <p className="text-gray-500 font-normal">
                      Tweak existing functionality
                    </p>
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                  >
                    Batch uploads
                    <p className="text-gray-500 font-normal">
                      Get your time back
                    </p>
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                  >
                    Social sharing
                    <p className="text-gray-500 font-normal">
                      Generate content for socials
                    </p>
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
