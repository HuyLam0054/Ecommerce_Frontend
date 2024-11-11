import Image from "next/image";
import * as React from "react";
import { IoIosSend } from "react-icons/io";

export function Comment_Box() {
  return (
    <form className="">
      <label htmlFor="chat" className="sr-only">
        Your message here
      </label>
      <div className="flex items-center lg:px-5 py-2 rounded-lg ">
        <Image
          className="w-8 h-8 rounded-full"
          src="/icons/google_icons.svg"
          alt="avt_img"
        />
        <textarea
          id="chat"
          className="block mx-4 p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Your message..."
        ></textarea>
        <button
          type="submit"
          className="inline-flex justify-center p-2 text-blue-600 rounded-full cursor-pointer hover:bg-blue-100 dark:text-blue-500 dark:hover:bg-gray-600"
        >
          <IoIosSend className="w-6 h-6" />
        </button>
      </div>
    </form>
  );
}
