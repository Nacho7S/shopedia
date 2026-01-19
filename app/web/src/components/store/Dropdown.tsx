"use client";

import { FaAngleDown } from "react-icons/fa";
import { useState } from "react";

export default function Dropdown() {
  const [open, setOpen] = useState(false);

  const Category = [
    { id: 1, name: "T-shirt" },
    { id: 2, name: "Jacket" },
    { id: 3, name: "Shirt" },
    { id: 4, name: "Jeans" },
    { id: 5, name: "Bag" },
    { id: 6, name: "Shoes" },
    { id: 7, name: "Cap" },
  ];

  return (
    <div className="relative inline-block text-left">
      <div onClick={() => setOpen(!open)} className="flex items-center justify-between gap-2 p-2 w-44 h-10 rounded-md  cursor-pointer transition border-r-2 border-gray-400">
        <span className="text-sm font-medium text-gray-700">All Categories</span>
        <FaAngleDown className={`text-gray-600 text-xs transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
      </div>

      {open && (
        <div className="absolute left-0 mt-2 w-48 bg-white border rounded-md shadow-lg z-10">
          <ul className="py-1">
            {Category.map((item) => (
              <li key={item.id} className="hover:bg-gray-100 px-4 py-2 cursor-pointer transition">
                {item.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
