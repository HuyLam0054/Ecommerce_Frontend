"use client";
import * as React from "react";
import { FaCartArrowDown, FaHeart } from "react-icons/fa";
import { Rating } from "../rating/product.rating";
export interface IAppProps {
  name: string;
  old_price: number;
  new_price: number;
  star: number;
  numb_review: number;
  detail_content: string;
}
export function Product_Content(props: IAppProps) {
  return (
    <>
      <div className="bg-gray-100 dark:bg-gray-700 lg:mt-3">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full px-4">
              <h2 className="text-3xl dark:text-white font-bold mb-2">
                {props.name}
              </h2>
              <div className="mb-4">
                <span className="text-2xl font-bold dark:text-white mr-2">
                  ${props.new_price}
                </span>
                <span className="text-gray-500 dark:text-gray-200 line-through">
                  ${props.old_price}
                </span>
              </div>
              <Rating rating={props.star} numb_review={props.numb_review} />
              <p className="text-gray-700 dark:text-gray-300 mb-6 text-justify px-6">
                {props.detail_content}
              </p>

              <div className="pb-5">
                <div className="flex mb-6">
                  <h3 className="text-lg font-semibold mr-3 dark:text-gray-300 mt-0.5">
                    Color:
                  </h3>
                  <div className="flex space-x-2">
                    <button className="w-8 h-8 bg-black rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"></button>
                    <button className="w-8 h-8 bg-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300"></button>
                    <button className="w-8 h-8 bg-blue-500 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"></button>
                  </div>
                </div>
                <div className="flex flex-row">
                  <label
                    htmlFor="quantity"
                    className="block text-lg font-medium text-gray-700 dark:text-gray-300 mt-2 mr-2"
                  >
                    Quantity:
                  </label>
                  <input
                    type="number"
                    id="quantity"
                    name="quantity"
                    min="1"
                    className="w-12 text-center rounded-md border-gray-300  shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 mt-1"
                  />
                </div>
              </div>

              <div className="flex space-x-4 mb-6">
                <button className="bg-indigo-600 flex gap-2 items-center text-white px-6 py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                  <FaCartArrowDown />
                  Add to Cart
                </button>
                <button className="bg-gray-200 flex gap-2 items-center  text-gray-800 px-6 py-2 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2">
                  <FaHeart />
                  Wishlist
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
