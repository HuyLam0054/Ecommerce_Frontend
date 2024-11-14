"use client";
import React from "react";
import Filter_And_Soft_Button from "../common/buttons/group-button/filter&soft.button";
import { Main_Breadcrumb } from "../common/breadcrumbs";

interface ProductPageLayoutProps {
  pathname: string;
  children: React.ReactNode;
}
export default function Product_Page_Layout({
  pathname,
  children,
}: ProductPageLayoutProps) {
  return (
    <div className="min-h-screen pt-20 lg:pt-32 dark:bg-gray-700 lg:p-14">
      <div className="mt-2 items-end justify-between space-x-3 sm:flex sm:space-y-0 md:mb-8 max-w-screen-2xl mx-auto px-3">
        <Main_Breadcrumb pathname={pathname} />
      </div>
      {/* Popular */}
      <div className="flex justify-between mb-5 px-5">
        <div className="font-bold text-2xl">Populars Products</div>
        <Filter_And_Soft_Button />
      </div>

      <div className="grid lg:grid-cols-3 xl:grid-cols-4 mx-auto justify-items-center items-center gap-8 px-3">
        {children}
      </div>
    </div>
  );
}
