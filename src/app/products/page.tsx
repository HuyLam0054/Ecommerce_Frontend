"use client";
import * as React from "react";
import { usePathname } from "next/navigation";
import { Main_Breadcrumb } from "@/components/common/breadcrumbs/main.breadcrumb";
import { Product_Card } from "@/components/common/cards/product.card";
import Card_Product_Skeleton from "@/components/common/skeletons/cardproduct.skeleton";
import Filter_And_Soft_Button from "@/components/common/buttons/group-button/filter&soft.button";

export default function ProductsPage() {
  const pathname = usePathname();

  return (
    <div className="min-h-screen pt-20 lg:pt-32 dark:bg-gray-700 lg:px-14">
      <div className="mb-4 items-end justify-between space-x-3 sm:flex sm:space-y-0 md:mb-8 max-w-screen-2xl mx-auto px-3">
        <Main_Breadcrumb pathname={pathname} />
        <Filter_And_Soft_Button />
      </div>

      <div className="grid lg:grid-cols-3 xl:grid-cols-4 mx-auto justify-items-center items-center gap-4 px-3">
        <Product_Card
          discount={35}
          href="/products/ipad/iPad27"
          img="/img/ipad_pro.png"
          name='Apple iPad 27", 1TB HDD, Retina 5K Display, M3 Max'
          rating={4.3}
          review_numb={251}
          price={899}
        />
        <Product_Card
          discount={35}
          href="/products/ipad/iPad27"
          img="/img/ipad_pro.png"
          name='Apple iPad 27", 1TB HDD, Retina 5K Display, M3 Max'
          rating={4.3}
          review_numb={251}
          price={899}
        />
        <Product_Card
          discount={35}
          href="/products/ipad/iPad27"
          img="/img/ipad_pro.png"
          name='Apple iPad 27", 1TB HDD, Retina 5K Display, M3 Max'
          rating={4.3}
          review_numb={251}
          price={899}
        />
        <Card_Product_Skeleton />
      </div>
    </div>
  );
}
