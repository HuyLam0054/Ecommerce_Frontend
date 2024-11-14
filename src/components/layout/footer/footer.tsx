"use client";

import Link from "next/link";
import * as React from "react";
import {
  FaApple,
  FaFacebook,
  FaGithub,
  FaGoogle,
  FaHome,
  FaPhone,
  FaYoutube,
} from "react-icons/fa";
import { FaZ } from "react-icons/fa6";

export function FooterRoot() {
  return (
    <footer className="bg-zinc-50 text-center text-surface/75 dark:bg-gray-900 dark:text-white/75 lg:text-left">
      <div className="flex items-center justify-center border-b-2 border-gray-200 p-6 dark:border-white/10 lg:justify-between">
        <div className="me-12 hidden lg:block">
          <span>Get connected with us on social networks</span>
        </div>
        {/* Social Icons */}
        <div className="flex justify-center">
          <Link href="#" className="me-6 h-4 w-4" aria-label="Facebook">
            <FaFacebook className="w-5 h-5" />
          </Link>
          <Link href="#" className="me-6 h-4 w-4" aria-label="Google">
            <FaGoogle className="w-5 h-5" />
          </Link>
          <Link href="#" className="me-6 h-4 w-4" aria-label="Github">
            <FaGithub className="w-5 h-5" />
          </Link>
          <Link href="#" className="me-6 h-4 w-4" aria-label="Z">
            <FaZ className="w-5 h-5" />
          </Link>
          <Link href="#" className="me-6 h-4 w-4" aria-label="Youtube">
            <FaYoutube className="w-5 h-5" />
          </Link>
        </div>
      </div>

      <div className="mx-6 py-10 text-center md:text-left">
        <div className="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="">
            <h6 className="mb-4 flex items-center justify-start font-semibold md:justify-start">
              <FaApple className="h-8 w-8 me-2 dark:text-white -mt-1" />
              <span className="text-xl font-bold">Brian Apple</span>
            </h6>
            <p className="text-justify">
              Here you can use rows and columns to organize your footer content.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem
              ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum
              dolor sit amet, consectetur elit.
            </p>
          </div>
          <div className="flex flex-col text-center justify-center md:text-start">
            <h6 className="mb-4 font-semibold uppercase">
              <Link href="/products/">Products</Link>
            </h6>

            <Link href="/products/iphone" className="mb-4">
              <span className="text-gray-800 hover:text-blue-500">IPhone</span>
            </Link>

            <p className="mb-4 text-gray-800 hover:text-blue-500">
              <Link href="/products/ipad" className="mb-4">
                <span className="text-gray-800 hover:text-blue-500">IPad</span>
              </Link>
            </p>
            <p className="mb-4 text-gray-800 hover:text-blue-500">
              <Link href="/products/macbook" className="mb-4">
                <span className="text-gray-800 hover:text-blue-500">
                  Macbook
                </span>
              </Link>
            </p>
            <p className="mb-4 text-gray-800 hover:text-blue-500">
              <Link href="/products/iphone/watch" className="mb-4">
                <span className="text-gray-800 hover:text-blue-500">Watch</span>
              </Link>
            </p>
            <p className="text-gray-800 hover:text-blue-500">
              <Link href="/products/accessories" className="mb-4">
                <span className="text-gray-800 hover:text-blue-500">
                  Accessories
                </span>
              </Link>
            </p>
          </div>
          <div className="flex flex-col text-center justify-center md:text-start">
            <h6 className="mb-4 font-semibold uppercase">Useful links</h6>
            <p className="mb-4">
              <Link href="#">Pricing</Link>
            </p>
            <p className="mb-4">
              <Link href="#">Settings</Link>
            </p>
            <p className="mb-4">
              <Link href="#">Orders</Link>
            </p>
            <p className="mb-4">
              <Link href="#">Help</Link>
            </p>
            <p>
              <Link href="#">Help</Link>
            </p>
          </div>
          <div className="flex flex-col text-center justify-center md:text-start">
            <h6 className="mb-4 font-semibold uppercase">Contact</h6>
            <p className="mb-4 flex items-center justify-center md:justify-start">
              <FaHome className="me-3 h-5 w-5" />
              <span>Long Thanh, Dong Nai, VN</span>
            </p>
            <p className="mb-4 flex items-center justify-center md:justify-start">
              <FaHome className="me-3 h-5 w-5" />
              <span>huy.lam.0054@gmail.com</span>
            </p>
            <p className="mb-4 flex items-center justify-center md:justify-start">
              <FaPhone className="me-3 h-5 w-5" />
              <span>+ 01 234 567 88</span>
            </p>
            <p className="mb-4 flex items-center justify-center md:justify-start">
              <FaPhone className="me-3 h-5 w-5" />
              <Link href="https://huylam-portfolio.vercel.app/" target="_blank">
                <span className="hover:text-blue-500">My Portfolio</span>
              </Link>
            </p>
          </div>
        </div>
      </div>

      <div className="bg-black/5 p-6 text-center">
        <span>© 2024 Copyright: </span>
        <Link className="font-semibold" href="/">
          Brian Apple
        </Link>
      </div>
    </footer>
  );
}
