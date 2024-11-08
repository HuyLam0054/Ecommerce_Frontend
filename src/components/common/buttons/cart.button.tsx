import * as React from "react";
import { FaCartArrowDown } from "react-icons/fa";
import { Indicator_Numb } from "../indicators/indicator_numb";

export interface ICart_ButtonProps {}

export function Cart_Button(props: ICart_ButtonProps) {
  return (
    <button className="flex relative group py-2 cursor-pointer hover:text-[green] hover:-mt-1">
      <FaCartArrowDown className="w-5 h-5 mr-3" />
      <Indicator_Numb indicator_numb={2} />
    </button>
  );
}
