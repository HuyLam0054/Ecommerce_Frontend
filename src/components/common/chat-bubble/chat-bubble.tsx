"use client";
import * as React from "react";
import { Comment_Box } from "./comment.chat";
import Image from "next/image";

export function Chat_Bubble() {
  const [openComment, setOpenComment] = React.useState<boolean>(false);

  return (
    <>
      <div className="flex items-start gap-2.5 my-3 px-5 pt-2">
        <Image
          width={1000}
          height={1000}
          className="w-8 h-8 rounded-full"
          src="/icons/google_icons.svg"
          alt="image"
        />
        <div className="flex flex-col w-full leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl dark:bg-gray-800">
          <div className="flex items-center space-x-2 rtl:space-x-reverse">
            <span className="text-sm font-semibold text-gray-900 dark:text-white">
              Lâm Quang Huy
            </span>
            <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
              11:46
            </span>
          </div>
          <p className="text-sm font-normal py-2.5 text-gray-900 dark:text-white">
            That is awesome. I think our users will really appreciate the
            improvements.
          </p>
          <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
            Delivered
          </span>
          <button onClick={() => setOpenComment(!openComment)}></button>
          {openComment && <Comment_Box />}
        </div>
      </div>
    </>
  );
}
