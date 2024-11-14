"use client";
import * as React from "react";

export function Signout_Button() {
  return (
    <button
      aria-label="signout"
      type="button"
      className="inline-flex items-center px-[5rem] py-2.5 text-sm font-medium text-center text-white bg-gray-700 rounded-lg hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    >
      Sign out
    </button>
  );
}
