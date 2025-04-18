import React from "react";

const categories = [
  {
    title: "Summer Fashion",
    items: [
      { name: "Men’s Casual Shoes", offer: "Min. 70% Off", image: "./casual-shoes.jpeg" },
      { name: "Men’s Slippers & Flip Flops", offer: "Min. 70% Off", image: "./flip-flops.jpeg" },
      { name: "Backpacks", offer: "Min. 70% Off", image: "bag.jpeg" },
      { name: "Suitcases", offer: "Min. 70% Off", image: "./suitcase.jpeg" },
    ],
  },
  {
    title: "Festive Must-haves",
    items: [
      { name: "Men’s T-shirts", offer: "Min. 50% Off", image: "./tshirt.jpeg" },
      { name: "Casual Shirts", offer: "Min. 50% Off", image: "casual-shirt.jpeg" },
      { name: "Women’s Sarees", offer: "Min. 50% Off", image: "saree.jpeg" },
      { name: "Speakers", offer: "Min. 50% Off", image: "speaker.jpeg" },
    ],
  },
  {
    title: "Home Decor & Furnishings",
    items: [
      { name: "Water Bottles & Flasks", offer: "Min. 50% Off", image: "bottle.jpeg" },
      { name: "Pillows", offer: "Min. 50% Off", image: "pillow.jpeg" },
      { name: "Plant Saplings", offer: "Min. 50% Off", image: "sapling.jpeg" },
      { name: "Kitchen Containers", offer: "Min. 50% Off", image: "container.jpeg" },
    ],
  },
];

const CategoriesSection = () => {
  return (
    <div className="w-full bg-white p-4 grid grid-cols-1 md:grid-cols-3 gap-4">
      {categories.map((cat, index) => (
        <div key={index} className="border rounded-md shadow-sm p-3">
          <div className="flex justify-between items-center mb-3">
            <h2 className="font-semibold text-lg">{cat.title}</h2>
            <button className="text-blue-600 text-xl">→</button>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {cat.items.map((item, idx) => (
              <div key={idx} className="border rounded p-2 text-sm">
                <img src={item.image} alt={item.name} className="w-28 h-28  mb-2 rounded" />
                <p>{item.name}</p>
                <p className="text-green-600 font-semibold">{item.offer}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CategoriesSection;
