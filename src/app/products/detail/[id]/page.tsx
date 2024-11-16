"use client";
import * as React from "react";
import { usePathname } from "next/navigation";
import { Main_Breadcrumb } from "@/components/common/breadcrumbs";
import { Detail_Img_Card } from "@/components/common/cards/detail.img.card";
import { Specifications_Table } from "@/components/common/tables/specifications.table";
import { Comment_Content } from "@/components/contents/comment";
import { Recomment_Product } from "@/components/contents/recomemd.product";
import { Detail_Product_Content } from "@/components/contents";

export default function DetailIpadPage() {
  const pathname = usePathname();

  return (
    <>
      <div className="min-h-screen pt-20 lg:pt-32 dark:bg-gray-700 max-w-screen-2xl mx-auto p-8">
        <Main_Breadcrumb pathname={pathname} />
        <div className="grid lg:grid-cols-2 lg:gap-4 mb-4">
          <Detail_Img_Card />
          <Detail_Product_Content
            name={`Ipad Pro 11 Series`}
            old_price={349.99}
            new_price={399.99}
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
