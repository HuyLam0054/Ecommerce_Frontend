"use client";
import * as React from "react";
import { usePathname } from "next/navigation";
import { Main_Breadcrumb } from "@/components/common/breadcrumbs/main.breadcrumb";
import { Detail_Img_Card } from "@/components/common/cards/detail.img.card";
import { Product_Content } from "@/components/common/contents/product.content";
import { Specifications_Table } from "@/components/common/tables/specifications.table";
import { Comment_Content } from "@/components/common/contents/comment";
import { Recomment_Product } from "@/components/common/contents/recomemd.product";

export default function DetailPage() {
  const pathname = usePathname();

  return (
    <>
      <div className="p-4 min-h-screen pt-20 lg:pt-32 dark:bg-gray-700 max-w-screen-2xl mx-auto">
        <Main_Breadcrumb pathname={pathname} />
        <div className="grid lg:grid-cols-2 lg:gap-4 mb-4">
          <Detail_Img_Card />
          <Product_Content
            name={`Ipad Pro 11 Series`}
            old_prize={349.99}
            new_prize={399.99}
            star={4.4}
            numb_review={120}
            detail_content={`Experience premium sound quality and industry-leading noise
                cancellation with these wireless headphones. Perfect for music
                lovers and frequent travelers.Experience premium sound quality and industry-leading noise
                cancellation with these wireless headphones. Perfect for music
                lovers and frequent travelersExperience premium sound quality and industry-leading noise
                cancellation with these wireless headphones. Perfect for music
                lovers and frequent travelers`}
          />
          <Comment_Content />
          <Specifications_Table />
        </div>
      </div>
      <Recomment_Product />
    </>
  );
}
