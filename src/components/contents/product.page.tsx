"use client";
import React from "react";
import Filter_And_Soft_Button from "../common/buttons/group-button/filter&soft.button";
import { Main_Breadcrumb } from "../common/breadcrumbs";
import { Pagination } from "../common/pagination/pagination";

interface ProductPageLayoutProps {
  pathname: string;
  children: React.ReactNode;
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export default function Product_Page_Layout(props: ProductPageLayoutProps) {
  return (
    <div className="min-h-screen pt-20 lg:pt-32 dark:bg-gray-700 lg:p-14">
      <div className="mt-2 items-end justify-between space-x-3 sm:flex sm:space-y-0 md:mb-8 max-w-screen-2xl mx-auto px-3">
        <Main_Breadcrumb pathname={props.pathname} />
      </div>

      {/* Popular */}
      <div className="flex justify-between mb-5 px-5">
        <div className="font-bold text-2xl">Popular Products</div>
        <Filter_And_Soft_Button />
      </div>

      <div className="grid lg:grid-cols-3 xl:grid-cols-4 mx-auto justify-items-center items-center gap-8 px-3">
        {props.children}
        <div className="col-span-full flex justify-center mt-8">
          <Pagination
            currentPage={props.currentPage}
            totalPages={props.totalPages}
            onPageChange={props.onPageChange}
          />
        </div>
      </div>
    </div>
  );
}
