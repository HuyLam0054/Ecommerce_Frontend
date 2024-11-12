"use client";
import Link from "next/link";
import * as React from "react";
import {
  FaEye,
  FaHeart,
  FaRegMoneyBillAlt,
  FaShippingFast,
} from "react-icons/fa";
import { Rating } from "../rating/product.rating";
import AddToCart_Button from "../buttons/addtocart.button";
import { MdDiscount } from "react-icons/md";
import Image from "next/image";
interface Product_Item {
  href: string;
  img: string;
  name: string;
  discount: number;
  rating: number;
  review_numb: number;
  price: number;
}
export function Product_Card(props: Product_Item) {
  return (
    <div className="rounded-lg border lg:max-w-sm border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
      <div className="h-56 w-full">
        <Link href={props.href}>
          <Image
            className="mx-auto h-full object-cover"
            src={props.img}
            alt={props.name}
          />
        </Link>
      </div>
      <div className="pt-6">
        <div className="mb-4 flex items-center justify-between gap-4">
          <span className="flex me-2 rounded bg-primary-100 px-2.5 py-0.5 text-xs font-medium text-green-700 dark:bg-gray-700 dark:text-green-300">
            <MdDiscount className="mt-0.5 me-0.5" /> Up to {props.discount}% off
          </span>

          <div className="flex items-center justify-end gap-1">
            <button
              type="button"
              data-tooltip-target="tooltip-quick-look"
              className="rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              <FaEye />
            </button>
            <div className="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-700">
              Quick look
            </div>

            <button
              type="button"
              className="rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              <FaHeart />
            </button>
            <div className="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-700"></div>
          </div>
        </div>

        <Link
          href={props.href}
          className="text-lg font-semibold leading-tight bg-transparent bg-clip-text text-transparent bg-gradient-to-br  from-gray-900 to-gray-900 dark:from-gray-300 dark:to-gray-300 hover:from-blue-800 hover:to-indigo-800 hover:via-pink-800"
        >
          {props.name}
        </Link>

        <div className="mt-2 flex items-center gap-2">
          <div className="flex items-center">
            <Rating rating={props.rating} numb_review={props.review_numb} />
          </div>
        </div>

        <ul className="mt-2 flex items-center gap-4">
          <li className="flex items-center gap-2">
            <FaShippingFast className="dark:text-gray-400" />
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
              Fast Delivery
            </p>
          </li>

          <li className="flex items-center gap-2">
            <FaRegMoneyBillAlt className="dark:text-gray-400" />
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
              Best Price
            </p>
          </li>
        </ul>

        <div className="mt-4 flex items-center justify-between gap-4">
          <p className="text-2xl font-extrabold leading-tight text-gray-900 dark:text-white">
            ${props.price}
          </p>

          <AddToCart_Button />
        </div>
      </div>
    </div>
  );
}
