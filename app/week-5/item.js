import React from "react";

export default function Item({ name, quantity, category }) {
  return (
    <li className="flex p-4 bg-purple-100 shadow-md rounded-lg my-2">
      <div className="flex flex-col">
        <span className="font-bold text-lg">{name}</span>
        <span className="text-gray-500"> Buy {quantity}</span>
        <span className="text-orange-500 font-semibold"> in {category}</span>
      </div>
    </li>
  );
}
