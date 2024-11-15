"use client";

import React from "react";
import { usePathname, useRouter } from "next/navigation";
import { Product_Card } from "@/components/common/cards";
import Product_Page_Layout from "@/components/contents/product.page";

export default function ProductsPage() {
  const pathname = usePathname();
  const router = useRouter();

  // Extract page number from the pathname
  const currentPage = React.useMemo(() => {
    const match = pathname.match(/page=(\d+)/);
    return match ? parseInt(match[1], 10) : 1; // Default to page 1
  }, [pathname]);

  // Sample data for demonstration
  const productsPerPage = 4;
  const allProducts = Array(20)
    .fill(0)
    .map((_, i) => ({
      id: i + 1,
      name: `Apple iPad ${i + 1}, Retina 5K Display`,
      discount: 10 + i,
      price: 799 + i * 10,
      rating: 4 + (i % 5) * 0.1,
      review_numb: 100 + i * 10,
      href: `/products/ipad/iPad${i + 1}`,
    }));

  // Get products for the current page
  const products = allProducts.slice(
    (currentPage - 1) * productsPerPage,
    currentPage * productsPerPage
  );

  // Handle pagination
  const handlePageChange = (page: number) => {
    router.push(`/products/page=${page}`);
  };

  return (
    <Product_Page_Layout
      pathname={pathname}
      currentPage={currentPage}
      totalPages={Math.ceil(allProducts.length / productsPerPage)}
      onPageChange={handlePageChange}
    >
      {products.map((product) => (
        <Product_Card
          key={product.id}
          discount={product.discount}
          href={product.href}
          img=""
          name={product.name}
          rating={product.rating}
          review_numb={product.review_numb}
          price={product.price}
        />
      ))}
    </Product_Page_Layout>
  );
}
