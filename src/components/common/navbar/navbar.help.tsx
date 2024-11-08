/* eslint-disable @next/next/no-img-element */
"use client";
import * as React from "react";
import Link from "next/link";

export interface ContentBody {
  name: string;
  url: string;
}
const content_body = [
  {
    name: "Dispath and delivery",
    url: "#",
  },
  {
    name: "returns",
    url: "#",
  },
  {
    name: "contact us",
    url: "#",
  },
  {
    name: "privacy policy",
    url: "#",
  },
  {
    name: "terms of sale",
    url: "#",
  },
  {
    name: "terms of use",
    url: "#",
  },
  {
    name: "send us feed back",
    url: "#",
  },
];

export function NavbarHelp() {
  return (
    <div className="absolute top-2 -left-10 transition group-hover:translate-y-3 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 min-w-[250px] transform">
      <div className="relative top-6 p-6 bg-white rounded-xl shadow-xl w-full">
        <div className="w-10 h-10 bg-white transform rotate-45 absolute top-0 z-0 -translate-x-4 transition-transform group-hover:translate-x-7 duration-500 ease-in-out rounded-sm"></div>
        <div className="relative z-10">
          <Link
            href="#"
            className="text-gray-600 hover:text-gray-800 pb-3 block font-bold"
          >
            Help
          </Link>
          <ul className="text-[15px]">
            {content_body.map((item: ContentBody) => (
              <li key={item.name}>
                <Link
                  href={item.url}
                  className="text-gray-600 py-1 block font-normal capitalize hover:text-[green]"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
