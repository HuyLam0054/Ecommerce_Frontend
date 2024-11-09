"use client";
import Link from "next/link";
import * as React from "react";
import { FaHome } from "react-icons/fa";
import { MdOutlineArrowForwardIos } from "react-icons/md";

export interface IMain_BreadcrumbProps {
  pathname: string;
}

export function Main_Breadcrumb({ pathname }: IMain_BreadcrumbProps) {
  const pathParts = pathname.split("/").filter((part) => part);
  return (
    <nav className="flex lg:ml-20">
      <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
        <li className="inline-flex items-center">
          <Link
            href="/"
            className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
          >
            <FaHome className="mr-2" />
            Home
          </Link>
        </li>
        {pathParts.map((part, index) => (
          <li key={index}>
            <div className="flex items-center">
              <MdOutlineArrowForwardIos className="dark:text-gray-400" />
              <Link
                href={`/${pathParts.slice(0, index + 1).join("/")}`}
                className="ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white"
              >
                {part.charAt(0).toUpperCase() + part.slice(1)}
              </Link>
            </div>
          </li>
        ))}
      </ol>
    </nav>
  );
}
