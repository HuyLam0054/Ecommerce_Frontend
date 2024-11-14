"use client";

import * as React from "react";
import { usePathname } from "next/navigation";
import { Product_Card } from "@/components/common/cards";
import Product_Page_Layout from "@/components/contents/product.page";

export default function ProductsPage() {
  const pathname = usePathname();

  return (
    <Product_Page_Layout pathname={pathname}>
      <Product_Card
        discount={35}
        href="/products/ipad/iPad27"
        img=""
        name='Apple iPad 27", 1TB HDD, Retina 5K Display, M3 Max'
        rating={4.3}
        review_numb={251}
        price={899}
      />
      <Product_Card
        discount={35}
        href="/products/ipad/iPad27"
        img=""
        name='Apple iPad 27", 1TB HDD, Retina 5K Display, M3 Max'
        rating={4.3}
        review_numb={251}
        price={899}
      />
      <Product_Card
        discount={35}
        href="/products/ipad/iPad27"
        img=""
        name='Apple iPad 27", 1TB HDD, Retina 5K Display, M3 Max'
        rating={4.3}
        review_numb={251}
        price={899}
      />
      <Product_Card
        discount={35}
        href="/products/ipad/iPad27"
        img=""
        name='Apple iPad 27", 1TB HDD, Retina 5K Display, M3 Max'
        rating={4.3}
        review_numb={251}
        price={899}
      />
    </Product_Page_Layout>
  );
}
