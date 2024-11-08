"use client";
import * as React from "react";
import { SignIn_Modal } from "../modals/signin.modal";

export function SignIn_Button() {
  const [openModal, setOpenModal] = React.useState(false);
  return (
    <>
      <button
        type="button"
        onClick={() => setOpenModal(true)}
        className="flex items-center text-center w-full p-2 text-base text-gray-900 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
      >
        Sign In
      </button>
      {openModal && <SignIn_Modal setOpenModal={setOpenModal} />}
    </>
  );
}
