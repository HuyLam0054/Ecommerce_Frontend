"use client";
import React from "react";
import { CiImageOn } from "react-icons/ci";

export default function Card_Product_Skeleton() {
  return (
    <div className="rounded-lg border lg:max-w-sm border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
      <div className="h-56 w-full">
        <div className="flex items-center justify-center h-56 bg-gray-300 rounded-lg animate-pulse dark:bg-gray-700">
          <CiImageOn className="text-gray-400" />
        </div>
      </div>
      <div className="pt-6 animate-pulse">
        <div className="mb-4 flex items-center justify-between gap-4">
          <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-72 mb-4"></div>
          <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32 mb-4"></div>
        </div>

        <div className="h-4 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[480px] mb-2.5"></div>
        <div className="h-4 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[480px] mb-10"></div>

        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[440px] mb-2.5"></div>
        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[460px] mb-2.5"></div>
        <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[440px] mb-2.5"></div>
        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[460px] mb-2.5"></div>
        <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
      </div>
    </div>
  );
}
