"use client";
import React, { useState } from "react";
import { FaFilter, FaSort } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import Filter_Modal from "../../modals/filter.modal";

export default function Filter_And_Soft_Button({}) {
  const [isOpenSort, setIsOpenSort] = useState<boolean>(false);
  const [isOpenFilter, setIsOpenFilter] = useState<boolean>(false);

  return (
    <div className="flex items-center space-x-4">
      <div className="w-full">
        <button
          type="button"
          onClick={() => {
            setIsOpenFilter(!isOpenFilter);
          }}
          className="flex w-full items-center justify-center rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700 sm:w-auto"
        >
          <FaFilter className="mr-2" />
          Filters
          <IoIosArrowDown className="ml-2" />
        </button>
        {isOpenFilter && <Filter_Modal setOpenModal={setIsOpenFilter} />}
      </div>
      <div className="w-full">
        <button
          type="button"
          onClick={() => {
            setIsOpenSort(!isOpenSort);
          }}
          className="flex w-full items-center justify-center rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700 sm:w-auto"
        >
          <FaSort className="mr-2" />
          Sort
          <IoIosArrowDown className="ml-2" />
        </button>
        {isOpenSort && (
          <div className="absolute mt-2 px-2 divide-y divide-gray-100 rounded-lg bg-white shadow dark:bg-gray-900">
            <ul
              className="p-2 text-left text-sm font-medium text-gray-500 dark:text-gray-400"
              aria-labelledby="sortDropdownButton"
            >
              <li>
                <a
                  href="#"
                  className="group inline-flex w-full items-center rounded-md px-3 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  {" "}
                  The most popular{" "}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="group inline-flex w-full items-center rounded-md px-3 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  {" "}
                  Newest{" "}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="group inline-flex w-full items-center rounded-md px-3 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  {" "}
                  Increasing price{" "}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="group inline-flex w-full items-center rounded-md px-3 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  {" "}
                  Decreasing price{" "}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="group inline-flex w-full items-center rounded-md px-3 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  {" "}
                  No. reviews{" "}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="group inline-flex w-full items-center rounded-md px-3 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  {" "}
                  Discount %{" "}
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
