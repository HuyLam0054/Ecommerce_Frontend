"use client";
import * as React from "react";
import { usePathname } from "next/navigation";
import { Main_Breadcrumb } from "@/components/common/breadcrumbs/main.breadcrumb";

export default function ProductsPage() {
  const pathname = usePathname();

  return (
    <div className="p-4 min-h-screen pt-20 lg:pt-32 dark:bg-gray-700">
      <Main_Breadcrumb pathname={pathname} />
      <div className="grid lg:grid-cols-2 gap-4 mb-4"></div>
    </div>
  );
}
