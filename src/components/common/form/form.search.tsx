"use client";
import * as React from "react";
import { FaSearch } from "react-icons/fa";

export interface ISearchFormProps {}

export function SearchForm(props: ISearchFormProps) {
  return (
    <div className="relative hidden md:block">
      <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
        <FaSearch className="w-5 h-5 text-gray-400" />
        <span className="sr-only">Search icon</span>
      </div>
      <input
        className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Search..."
      />
    </div>
  );
}
