import React from "react";
import { ChevronDown } from "lucide-react";

const categories = [
  { name: "Kilos", image: "/kilos.jpeg", hasDropdown: true },
  { name: "Mobiles", image: "/mobile.jpeg" , hasDropdown: true},
  { name: "Fashion", image: "/fashion.jpeg", hasDropdown: true },
  { name: "Electronics", image: "/electronics.jpeg", hasDropdown: true },
  { name: "Home & Furniture", image: "/furniture.jpeg", hasDropdown: true },
  { name: "Appliances", image: "/appliances.jpeg", hasDropdown: true },
  { name: "Flight Bookings", image: "/flight.jpeg", hasDropdown: true },
  { name: "Beauty, Toys & More", image: "/toys.jpeg", hasDropdown: true },
  { name: "Two Wheelers", image: "/two-wheeler.jpeg", hasDropdown: true },
];

const CategoryBar = () => {
  return (
    <div className="w-full bg-white shadow-sm px-4 py-2">
      <div className="flex justify-around items-center overflow-x-auto gap-4">
        {categories.map((category, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-sm text-gray-800 hover:text-blue-600 cursor-pointer"
          >
            <img
              src={category.image}
              alt={category.name}
              className="h-12 object-contain mb-1"
            />
            <div className="flex items-center gap-1">
              <span className="font-medium">{category.name}</span>
              {category.hasDropdown && (
                <ChevronDown className="w-3 h-3 text-gray-600" />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default CategoryBar;