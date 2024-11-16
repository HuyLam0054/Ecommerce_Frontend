"use client";
import * as React from "react";
import { usePathname } from "next/navigation";
import { Main_Breadcrumb } from "@/components/common/breadcrumbs";
import News_Page from "@/components/contents/news.page";

export default function NewsPage() {
  const pathname = usePathname();

  return (
    <div className="min-h-screen pt-14 lg:pt-32 dark:bg-gray-700 lg:px-14">
      <div className="my-2 items-end justify-between space-x-3 sm:flex sm:space-y-0 md:mb-8 max-w-screen-2xl mx-auto px-3">
        <Main_Breadcrumb pathname={pathname} />
      </div>
      <News_Page />
    </div>
  );
}
