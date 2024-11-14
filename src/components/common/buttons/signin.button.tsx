"use client";
import * as React from "react";
import { SignIn_Modal } from "../modals/signin.modal";

export function SignIn_Button() {
  const [openModal, setOpenModal] = React.useState(false);
  return (
    <>
      <button
        aria-label="signin"
        type="button"
        onClick={() => setOpenModal(true)}
        className="inline-flex items-center lg:mx-5 px-9 py-2.5 text-sm font-medium text-center text-white bg-gray-700 rounded-lg hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        <span className="mx-auto">Sign In</span>
      </button>
      {openModal && <SignIn_Modal setOpenModal={setOpenModal} />}
    </>
  );
}
