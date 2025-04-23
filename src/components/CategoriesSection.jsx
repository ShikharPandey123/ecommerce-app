import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "@/cartSlice";
import { addToWishlist } from "@/wishlistSlice";

const fruitDrinks = [
  { id: 1, name: "Melon Juice", price: 5, image: "./melon.png" },
  { id: 2, name: "Apple Juice", price: 4, image: "./apple.png" },
  { id: 3, name: "Tomato Juice", price: 5, image: "./tomato.png" },
  { id: 4, name: "Orange Juice", price: 5, image: "./orange.png" },
  { id: 5, name: "Mango Juice", price: 5, image: "./mango.png" },
  { id: 6, name: "Banana Strawberry", price: 5, image: "./banana-strawberry.png" },
  { id: 7, name: "Avocado Milk Juice", price: 4, image: "./avocado.png" },
  { id: 8, name: "Pineapple Juice", price: 5, image: "./pineapple.png" },
  { id: 9, name: "Grape Juice", price: 5, image: "./grape.png" },
  { id: 10, name: "Kiwi Juice", price: 5, image: "./kiwi.png" }
];

const CategoriesSection = () => {
  const dispatch = useDispatch();
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
    <div className="w-full bg-yellow-300 py-10 px-4">
      <h2 className="text-2xl font-bold text-center mb-2">Other Menu</h2>
      <p className="text-center text-gray-600 max-w-xl mx-auto mb-8">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex flex-col gap-4">
          {fruitDrinks.slice(0, 5).map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-4 bg-white p-4 rounded shadow hover:shadow-md transition cursor-pointer"
              onClick={() => handleProductClick(item)}
            >
              <img src={item.image} alt={item.name} className="w-12 h-12 rounded-full" />
              <div>
                <h3 className="text-lg font-medium">{item.name}</h3>
                <p className="text-sm text-gray-500">Lorem ipsum dolor sit amet consectetur adipiscing elit dolor</p>
              </div>
              <span className="ml-auto text-green-600 font-bold">${item.price}</span>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-4">
          {fruitDrinks.slice(5).map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-4 bg-white p-4 rounded shadow hover:shadow-md transition cursor-pointer"
              onClick={() => handleProductClick(item)}
            >
              <img src={item.image} alt={item.name} className="w-12 h-12 rounded-full" />
              <div>
                <h3 className="text-lg font-medium">{item.name}</h3>
                <p className="text-sm text-gray-500">Lorem ipsum dolor sit amet consectetur adipiscing elit dolor</p>
              </div>
              <span className="ml-auto text-green-600 font-bold">${item.price}</span>
            </div>
          ))}
        </div>
      </div>

      {showOverlay && selectedProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded shadow-lg relative max-w-sm w-full">
            <button
              onClick={handleCloseOverlay}
              className="absolute top-2 right-2 text-xl text-gray-600 hover:text-black"
            >
              &times;
            </button>
            <img src={selectedProduct.image} alt={selectedProduct.name} className="w-40 h-40 mx-auto rounded mb-4" />
            <h3 className="text-xl font-semibold text-center mb-1">{selectedProduct.name}</h3>
            <p className="text-center text-gray-600 mb-2">${selectedProduct.price}</p>
            <div className="flex justify-center gap-4">
              <button
                onClick={() => handleAddToWishlist(selectedProduct)}
                className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
              >
                Add to Wishlist
              </button>
              <button
                onClick={() => handleAddToCart(selectedProduct)}
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
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
