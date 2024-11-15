"use client";

import React from "react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export function Pagination(props: PaginationProps) {
  return (
    <nav aria-label="Pagination">
      <ul className="flex items-center space-x-2">
        {/* Prev Button */}
        <li>
          <button
            onClick={() =>
              props.onPageChange(Math.max(props.currentPage - 1, 1))
            }
            disabled={props.currentPage === 1}
            className={`px-4 py-2 ${
              props.currentPage === 1
                ? "text-gray-300 cursor-not-allowed"
                : "text-blue-500"
            }`}
          >
            Prev
          </button>
        </li>

        {/* Page Numbers */}
        {Array.from({ length: props.totalPages }, (_, i) => i + 1).map(
          (page) => (
            <li key={page}>
              <button
                onClick={() => props.onPageChange(page)}
                className={`px-4 py-2 ${
                  props.currentPage === page
                    ? "bg-blue-500 text-white"
                    : "bg-gray-100 text-gray-500"
                }`}
              >
                {page}
              </button>
            </li>
          )
        )}

        {/* Next Button */}
        <li>
          <button
            onClick={() =>
              props.onPageChange(
                Math.min(props.currentPage + 1, props.totalPages)
              )
            }
            disabled={props.currentPage === props.totalPages}
            className={`px-4 py-2 ${
              props.currentPage === props.totalPages
                ? "text-gray-300 cursor-not-allowed"
                : "text-blue-500"
            }`}
          >
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
}
