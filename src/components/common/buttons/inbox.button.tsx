import * as React from "react";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { Indicator_Numb } from "../indicators/indicator_numb";

export function Inbox_Button() {
  return (
    <button className="flex relative group py-2 cursor-pointer hover:text-[green] hover:-mt-1">
      <IoChatbubbleEllipsesOutline className="w-5 h-5 mr-3" />
      <Indicator_Numb indicator_numb={2} />
    </button>
  );
}
