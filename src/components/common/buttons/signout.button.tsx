"use client";
import * as React from "react";

export function Signout_Button() {
  return (
    <button
      aria-label="signout"
      type="button"
      className="items-center w-full p-2.5 text-sm font-medium text-center text-white bg-gray-700 rounded-b-lg hover:bg-gray-800 dark:bg-blue-600 dark:hover:bg-blue-700"
    >
      Sign Out
    </button>
  );
}
