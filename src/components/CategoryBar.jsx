import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const categories = [
  { name: "Kilos", image: "/kilos.jpeg", hasDropdown: true, items: ["Rice", "Wheat", "Sugar"] },
  { name: "Mobiles", image: "/mobile.jpeg", hasDropdown: true, items: ["Smartphones", "Feature Phones", "Accessories"] },
  { name: "Fashion", image: "/fashion.jpeg", hasDropdown: true, items: ["Men", "Women", "Kids"] },
  { name: "Electronics", image: "/electronics.jpeg", hasDropdown: true, items: ["TVs", "Laptops", "Cameras"] },
  { name: "Home & Furniture", image: "/furniture.jpeg", hasDropdown: true, items: ["Beds", "Sofas", "Tables"] },
  { name: "Appliances", image: "/appliances.jpeg", hasDropdown: true, items: ["Washing Machines", "Refrigerators", "Microwaves"] },
  { name: "Flight Bookings", image: "/flight.jpeg", hasDropdown: true, items: ["Domestic", "International"] },
  { name: "Beauty, Toys & More", image: "/toys.jpeg", hasDropdown: true, items: ["Beauty", "Toys", "Grooming"] },
  { name: "Two Wheelers", image: "/two-wheeler.jpeg", hasDropdown: true, items: ["Scooters", "Bikes"] },
];

const CategoryBar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);

  return (
    <div className="w-full bg-white shadow-sm px-4 py-2 relative z-50">
      <div className="flex justify-around items-center overflow-x-auto gap-4">
        {categories.map((category, index) => (
          <div key={index} className="relative">
            <div className="flex flex-col items-center text-sm text-gray-800 hover:text-blue-600 cursor-pointer">
              <img
                src={category.image}
                alt={category.name}
                className="h-12 object-contain mb-1"
              />
              <div className="flex items-center gap-1">
                <span className="font-medium">{category.name}</span>
                {category.hasDropdown && (
                  <ChevronDown
                    className="w-3 h-3 text-gray-600"
                    onClick={() =>
                      setOpenDropdown(openDropdown === index ? null : index)
                    }
                  />
                )}
              </div>
            </div>
            {openDropdown === index && (
              <div className="absolute top-full left-0 bg-white shadow-lg rounded-md w-64 z-50">
                {category.items.map((item, idx) => (
                  <div
                    key={idx}
                    className="px-4 py-2 hover:bg-blue-100 hover:scale-105 transition-all duration-150 ease-in-out"
                  >
                    {item}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryBar;
