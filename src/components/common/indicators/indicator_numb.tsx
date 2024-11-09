"use client";
import * as React from "react";

export interface IIndicatorProps {
  indicator_numb: number;
}

export function Indicator_Numb(props: IIndicatorProps) {
  return (
    <div className="absolute inline-flex items-center justify-center w-4 h-4 text-[10px] font-bold text-white bg-red-500 border-2 border-white rounded-full -top-[1px] -end-[1px] dark:border-gray-300">
      {props.indicator_numb}
    </div>
  );
}
