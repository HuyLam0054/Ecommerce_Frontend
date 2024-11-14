import React from "react";

export default function Main_Loading() {
  return (
    <div className="flex items-center justify-center w-full h-screen">
      <div className="flex justify-center items-center space-x-2">
        <div
          className="w-5 h-[10px] bg-blue-400 rounded animate-wave"
          style={{ animationDelay: "0s" }}
        />
        <div
          className="w-5 h-[10px] bg-blue-500 rounded animate-wave"
          style={{ animationDelay: "0.1s" }}
        />
        <div
          className="w-5 h-[10px] bg-blue-600 rounded animate-wave"
          style={{ animationDelay: "0.2s" }}
        />
        <div
          className="w-5 h-[10px] bg-blue-700 rounded animate-wave"
          style={{ animationDelay: "0.3s" }}
        />
      </div>
    </div>
  );
}
