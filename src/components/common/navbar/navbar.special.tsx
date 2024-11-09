"use client";
import * as React from "react";
import Link from "next/link";

export function Navbar_Special() {
  return (
    <div className="absolute -mt-3 -left-56 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 min-w-[500px] transform">
      <div className="relative top-2 p-6 bg-white rounded-xl shadow-xl w-full">
        <div className="w-10 h-10 bg-white transform rotate-45 absolute top-0 z-0 translate-x-0 transition-transform group-hover:translate-x-[15rem] duration-500 ease-in-out rounded-sm"></div>
        <div className="relative z-10">
          <div className="grid grid-cols-2 gap-6">
            <div>
              <ul className="mt-3 text-[15px]">
                <li>
                  <Link
                    href="#"
                    className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                  >
                    Direct Discount
                    <p className="text-gray-500 font-light text-xs text-justify">
                      Get a direct price reduction on Apple products during
                      special events or promotions.
                    </p>
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                  >
                    Bundle Offer
                    <p className="text-gray-500 font-light text-xs text-justify">
                      Purchase multiple Apple products together at a discounted
                      price.
                    </p>
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                  >
                    Trade-In Program
                    <p className="text-gray-500 font-light text-xs text-justify">
                      Trade in old devices for credit toward a new Apple
                      product.
                    </p>
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <ul className="mt-3 text-[15px]">
                <li>
                  <Link
                    href="#"
                    className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                  >
                    Education Store Discount
                    <p className="text-gray-500 font-light text-xs text-justify">
                      Exclusive discounts for students, teachers, and
                      educational staff.
                    </p>
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                  >
                    Free Software/Service Offer
                    <p className="text-gray-500 font-light text-xs text-justify">
                      Free access to services like Apple Music, TV+, Arcade, or
                      iCloud with new product purchases.
                    </p>
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                  >
                    Installment Payment Plan
                    <p className="text-gray-500 font-light text-xs text-justify">
                      Pay for Apple products in installments with low or no
                      interest.
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
