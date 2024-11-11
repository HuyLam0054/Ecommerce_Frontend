"use client";
import Image from "next/image";
import * as React from "react";

export function Detail_Img_Card() {
  return (
    <>
      <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-3">
        <div className="flex items-center justify-center mb-1 rounded bg-gray-50 dark:bg-gray-800 h-[calc(100vh/2)]">
          <Image
            width={1000}
            height={1000}
            alt="img"
            src="/img/ipad_pro.PNG"
            className="w-auto h-full object-cover p-3"
          />
        </div>

        <div className="grid grid-cols-4 gap-1 lg:gap-4">
          <Image
            width={1000}
            height={1000}
            alt="img"
            src="/img/ipad_pro.PNG"
            className="flex items-center justify-center h-[calc(100vh/7)] rounded bg-gray-50 dark:bg-gray-800"
          />
          <Image
            width={1000}
            height={1000}
            alt="img"
            src="/img/ipad_pro.PNG"
            className="flex items-center justify-center h-[calc(100vh/7)] rounded bg-gray-50 dark:bg-gray-800"
          />
          <Image
            width={1000}
            height={1000}
            alt="img"
            src="/img/ipad_pro.PNG"
            className="flex items-center justify-center h-[calc(100vh/7)] rounded bg-gray-50 dark:bg-gray-800"
          />
          <Image
            width={1000}
            height={1000}
            alt="img"
            src="/img/ipad_pro.PNG"
            className="flex items-center justify-center h-[calc(100vh/7)] rounded bg-gray-50 dark:bg-gray-800"
          />
        </div>
      </div>
    </>
  );
}
