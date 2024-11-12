"use client";
import React from "react";
import { FaCartArrowDown } from "react-icons/fa";

export default function AddToCart_Button() {
  return (
    <button
      type="button"
      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    >
      <FaCartArrowDown className="mr-2" />
      Add to cart
    </button>
  );
}
