"use client";
import * as React from "react";
import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";

export interface IRatingProps {
  rating: number;
  numb_review: number;
}

export function Rating(props: IRatingProps) {
  const stars = [];
  const fullStars = Math.floor(props.rating);
  const hasHalfStar = props.rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  // Thêm sao đầy
  for (let i = 0; i < fullStars; i++) {
    stars.push(<FaStar key={`star-full-${i}`} className="text-yellow-500" />);
  }

  // Thêm nửa sao (nếu có)
  if (hasHalfStar) {
    stars.push(<FaStarHalfAlt key="star-half" className="text-yellow-500" />);
  }

  // Thêm sao trống
  for (let i = 0; i < emptyStars; i++) {
    stars.push(
      <FaRegStar key={`star-empty-${i}`} className="text-yellow-500" />
    );
  }

  return (
    <div className="flex items-center mb-4">
      {stars}
      <span className="ml-2 text-gray-600 dark:text-gray-200">
        {props.rating} ({props.numb_review} reviews)
      </span>
    </div>
  );
}
