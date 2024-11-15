import React from "react";
import { Cart_Button } from "../buttons/cart.button";
import { Favorite_Button } from "../buttons/favorite.button";
import { Message_Button } from "../buttons/message.button";
import { New_Product_Button } from "../buttons/new.product";

export default function Bottom_Navbar() {
  return (
    <div className="fixed lg:hidden bottom-0 left-0 z-10 w-full h-16 bg-white border-t border-gray-200 dark:bg-gray-700 dark:border-gray-600">
      <div className="grid h-full max-w-lg grid-cols-4 mx-auto font-medium">
        <New_Product_Button />
        <Cart_Button numb={0} />
        <Favorite_Button numb={1} />
        <Message_Button numb={2} />
      </div>
    </div>
  );
}
