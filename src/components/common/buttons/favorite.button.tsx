"use client";
import * as React from "react";
import { FaHeart } from "react-icons/fa";
import { Indicator_Numb } from "../indicators/indicator_numb";

export function Favorite_Button() {
  return (
    <button className="flex relative group py-2 cursor-pointer hover:text-[red] hover:-mt-2">
      <FaHeart className="w-5 h-5 mr-3" />
      <Indicator_Numb indicator_numb={2} />
    </button>
  );
}
