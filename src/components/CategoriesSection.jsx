import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "@/cartSlice";
import { addToWishlist } from "@/wishlistSlice";

const categories = [
  {
    title: "Summer Fashion",
    items: [
      { id: 1, name: "Men’s Casual Shoes", offer: "Min. 70% Off", price: 999, image: "./casual-shoes.jpeg" },
      { id: 2, name: "Men’s Slippers & Flip Flops", offer: "Min. 70% Off", price: 499, image: "./flip-flops.jpeg" },
      { id: 3, name: "Backpacks", offer: "Min. 70% Off", price: 1499, image: "./bag.jpeg" },
      { id: 4, name: "Suitcases", offer: "Min. 70% Off", price: 2999, image: "./suitcase.jpeg" },
    ],
  },
  {
    title: "Festive Must-haves",
    items: [
      { id: 5, name: "Men’s T-shirts", offer: "Min. 50% Off", price: 699, image: "./tshirt.jpeg" },
      { id: 6, name: "Casual Shirts", offer: "Min. 50% Off", price: 899, image: "casual-shirt.jpeg" },
      { id: 7, name: "Women’s Sarees", offer: "Min. 50% Off", price: 1199, image: "saree.jpeg" },
      { id: 8, name: "Speakers", offer: "Min. 50% Off", price: 1999, image: "speaker.jpeg" },
    ],
  },
  {
    title: "Home Decor & Furnishings",
    items: [
      { id: 9, name: "Water Bottles & Flasks", offer: "Min. 50% Off", price: 299, image: "bottle.jpeg" },
      { id: 10, name: "Pillows", offer: "Min. 50% Off", price: 499, image: "pillow.jpeg" },
      { id: 11, name: "Plant Saplings", offer: "Min. 50% Off", price: 199, image: "sapling.jpeg" },
      { id: 12, name: "Kitchen Containers", offer: "Min. 50% Off", price: 349, image: "container.jpeg" },
    ],
  },
];

const CategoriesSection = () => {
  const dispatch = useDispatch();
  const [categoriesState, setCategoriesState] = useState(categories);
  const [showOverlay, setShowOverlay] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setShowOverlay(true);
  };

  const handleCloseOverlay = () => {
    setShowOverlay(false);
    setSelectedProduct(null);
  };

  const handleAddToCart = (product) => {
    dispatch(addToCart({ ...product, quantity: 1 }));
    handleCloseOverlay();
  };

  const handleAddToWishlist = (product) => {
    dispatch(addToWishlist(product));
    handleCloseOverlay();
  };

  return (
    <div className="w-full bg-white p-4 grid grid-cols-1 md:grid-cols-3 gap-4">
      {categoriesState.map((cat, index) => (
        <div key={index} className="border rounded-md shadow-sm p-3">
          <div className="flex justify-between items-center mb-3">
            <h2 className="font-semibold text-lg">{cat.title}</h2>
            <button className="text-blue-600 text-xl">→</button>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {cat.items.map((item, idx) => (
              <div
                key={idx}
                className="border rounded p-2 text-sm flex flex-col justify-between cursor-pointer"
                onClick={() => handleProductClick(item)}
              >
                <img src={item.image} alt={item.name} className="w-28 h-28 mb-2 rounded mx-auto" />
                <p className="text-center font-medium">{item.name}</p>
                <p className="text-center text-gray-700">₹{item.price}</p>
                <p className="text-green-600 font-semibold text-center">{item.offer}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
      {showOverlay && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-md relative">
            <button
              onClick={handleCloseOverlay}
              className="absolute top-2 right-2 text-gray-600 text-lg font-semibold"
            >
              X
            </button>
            <img
              src={selectedProduct.image}
              alt={selectedProduct.name}
              className="w-64 h-64 mb-4 rounded mx-auto"
            />
            <h3 className="text-center text-lg font-semibold">{selectedProduct.name}</h3>
            <p className="text-center text-gray-700">₹{selectedProduct.price}</p>
            <p className="text-center text-green-600 font-semibold">{selectedProduct.offer}</p>
            <div className="flex justify-center gap-4 mt-4">
              <button
                onClick={() => handleAddToWishlist(selectedProduct)}
                className="px-4 py-2 bg-green-500 text-white rounded"
              >
                Add to Wishlist
              </button>
              <button
                onClick={() => handleAddToCart(selectedProduct)}
                className="px-4 py-2 bg-blue-500 text-white rounded"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default CategoriesSection;