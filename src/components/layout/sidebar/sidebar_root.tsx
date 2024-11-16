"use client";

import { SignIn_Button } from "@/components/common/buttons/signin.button";
import User_Button from "@/components/common/buttons/user.button";
import { SearchForm } from "@/components/common/forms/form.search";
import Link from "next/link";
import * as React from "react";
import { AiOutlineProduct } from "react-icons/ai";
import { FaHandsHelping, FaInfo, FaNewspaper, FaRegStar } from "react-icons/fa";
import { IoIosArrowUp } from "react-icons/io";
import { MdMenuOpen } from "react-icons/md";
import { RiCustomerService2Line } from "react-icons/ri";

export function Sidebar_Root() {
  const [isOpenSidebar, setIsOpenSidebar] = React.useState<boolean>(false);
  const [openProducts, setOpenProducts] = React.useState<boolean>(false);
  const [openServices, setOpenServices] = React.useState<boolean>(false);
  const [openSpecial, setOpenSpecial] = React.useState<boolean>(false);
  const [isSignin] = React.useState<boolean>(true);

  const closeSidebar = () => {
    setIsOpenSidebar(false);
  };
  const menuData = [
    {
      title: "Products",
      icon: <AiOutlineProduct />,
      href: "/products",
      items: [
        {
          name: "Iphone",
          href: "/products/iphone",
        },
        {
          name: "Ipad",
          href: "/products/ipad",
        },
        {
          name: "Watch",
          href: "/products/watch",
        },
        {
          name: "Macbook",
          href: "/products/macbook",
        },
        {
          name: "Accessories",
          href: "/products/accessories",
        },
        {
          name: "Pre-owned",
          href: "/products/pre-owned",
        },
      ],
      isOpen: openProducts,
      onClickOpen: () => {
        setOpenProducts(!openProducts);
        setOpenServices(false);
        setOpenSpecial(false);
      },
    },
    {
      title: "Service",
      icon: <RiCustomerService2Line />,
      href: "/service",
      items: [
        {
          name: "Product Setup & Installation",
          href: "/service/ProductSetup&Installation",
        },
        { name: "Repairs & Technical Support", href: "/service" },
        { name: "Product Personalization", href: "/service" },
        { name: "Trade-In Service", href: "/service" },
        { name: "Gift Wrapping Service", href: "/service" },
      ],
      isOpen: openServices,
      onClickOpen: () => {
        setOpenServices(!openServices);
        setOpenProducts(false);
        setOpenSpecial(false);
      },
    },
    {
      title: "Special Offer",
      icon: <FaRegStar />,
      href: "/special-offer",
      items: [
        { name: "Direct Discount", href: "#" },
        { name: "Bundle Offer", href: "#" },
        { name: "Trade-In Program", href: "#" },
        { name: "Education Store Discount", href: "#" },
        { name: "Free Software/Service Offer", href: "#" },
        { name: "Installment Payment Plan", href: "#" },
      ],
      isOpen: openSpecial,
      onClickOpen: () => {
        setOpenSpecial(!openSpecial);
        setOpenServices(false);
        setOpenProducts(false);
      },
    },
    {
      title: "News",
      icon: <FaNewspaper />,
      href: "/news",
    },
    {
      title: "About Us",
      icon: <FaInfo />,
      href: "/help/about-us",
    },
    {
      title: "Help",
      icon: <FaHandsHelping />,
      href: "/help",
    },
  ];

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpenSidebar(!isOpenSidebar)}
        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        aria-label={isOpenSidebar ? "Open sidebar" : "Close sidebar"}
      >
        <MdMenuOpen className="w-5 h-5" />
      </button>
      <aside
        className={`fixed top-[72px] right-0 z-40  h-[calc(100vh-72px)] duration-500 ${
          isOpenSidebar ? "w-64" : "w-0"
        } flex flex-col transition-all duration-500 overflow-hidden whitespace-nowrap`}
      >
        <div
          className={`${
            isOpenSidebar ? "block" : "relative"
          } h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800 `}
        >
          {/* user button & search form */}
          <div
            className={`${
              isOpenSidebar ? "w-full" : "w-0"
            } mb-5 flex justify-center transition-all duration-500 overflow-hidden whitespace-nowrap`}
          >
            {isSignin ? (
              <User_Button
                img={`/icons/facebook_icons.svg`}
                name={`Nguyen Thi Kim Huong`}
                point={2300}
                isOpenSidebar={isOpenSidebar}
              />
            ) : (
              <SignIn_Button />
            )}
          </div>
          {/* Search */}
          <div className="w-full mb-5 flex justify-center">
            <SearchForm />
          </div>
          {/* Menu */}
          <ul className="space-y-2 block w-full mr-auto font-sans text-base antialiased font-normal leading-relaxed text-blue-gray-900">
            {menuData.map((menu, index) => (
              <li key={index}>
                <button
                  type="button"
                  onClick={menu.onClickOpen}
                  className="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                >
                  {menu.icon}
                  <span className=" flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">
                    <Link href={menu.href} onClick={closeSidebar}>
                      {menu.title}
                    </Link>
                  </span>
                  {menu.items && (
                    <IoIosArrowUp
                      className={`${
                        menu.isOpen ? "rotate-180" : ""
                      } duration-75`}
                    />
                  )}
                </button>
                <ul
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    menu.isOpen ? "max-h-[1000px]" : "max-h-0 opacity-0"
                  }`}
                >
                  {menu.items &&
                    menu.items.map((item, idx) => (
                      <li className="" key={idx}>
                        <Link
                          onClick={closeSidebar}
                          href={item.href}
                          className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </>
  );
}
