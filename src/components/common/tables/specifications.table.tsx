"use client";
import * as React from "react";

export function Specifications_Table() {
  const [isShowAll, setIsShowAll] = React.useState<boolean>(false);
  return (
    <div className="relative overflow-x-auto">
      <div className="flex">
        <p className="my-3 font-bold text-xl dark:text-white">Specification</p>
        <button
          type="button"
          onClick={() => setIsShowAll(!isShowAll)}
          className="rounded-full text-sm ml-5 px-5 text-center dark:text-gray-300 hover:text-blue-500"
        >
          {isShowAll ? `Hide` : `Show more`}
        </button>
      </div>

      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Specifications
            </th>
            <th scope="col" className="px-6 py-3">
              Details
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              Screen Size
            </th>
            <td className="px-6 py-4">10.9 inches</td>
          </tr>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              Display Technology
            </th>
            <td className="px-6 py-4">IPS LCD</td>
          </tr>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              Rear Camera
            </th>
            <td className="px-6 py-4">Wide Camera: 12MP, ƒ/1.8</td>
          </tr>
          {isShowAll && (
            <>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Front Camera
                </th>
                <td className="px-6 py-4">
                  Ultra Wide Camera: 12MP, 122°, ƒ/2.4
                </td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Chipset
                </th>
                <td className="px-6 py-4">Apple A14 Bionic 6-core</td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  NFC Technology
                </th>
                <td className="px-6 py-4">No</td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  RAM Capacity
                </th>
                <td className="px-6 py-4">4 GB</td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Internal Storage
                </th>
                <td className="px-6 py-4">64 GB</td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Battery
                </th>
                <td className="px-6 py-4">28.6 Wh (~ 7587 mAh)</td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  SIM Card
                </th>
                <td className="px-6 py-4">Nano-SIM</td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Operating System
                </th>
                <td className="px-6 py-4">iPadOS 17</td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Screen Resolution
                </th>
                <td className="px-6 py-4">1640 x 2360 pixels</td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Display Features
                </th>
                <td className="px-6 py-4">
                  True Tone, 500 nits, 60 Hz Refresh Rate
                </td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  CPU Type
                </th>
                <td className="px-6 py-4">
                  2 cores at 3.1 GHz & 4 cores at 1.8 GHz
                </td>
              </tr>
              {/* <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Compatibility
                </th>
                <td className="px-6 py-4">
                  Apple Pencil 1 2022, Apple Pencil USB-C 2023, iPad Gen 10
                  Apple Magic Keyboard + Trackpad
                </td>
              </tr> */}
            </>
          )}
        </tbody>
      </table>
    </div>
  );
}
