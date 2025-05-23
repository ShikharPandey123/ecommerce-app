import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Heart, User } from "lucide-react";
import { useSelector } from "react-redux";
import WishlistModal from "./WishlistModal";
import CartModal from "./CartModal";

const products = [
  "iPhone 15 Pro",
  "Samsung Galaxy S24",
  "Wireless Earbuds",
  "Bluetooth Speaker",
  "Laptop Stand",
  "Mechanical Keyboard",
  "LED Monitor",
  "Gaming Mouse",
  "Fitness Tracker",
  "Smartwatch",
];

export function Navbar() {
  const [query, setQuery] = useState("");
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const [showWishlistModal, setShowWishlistModal] = useState(false);
  const [showCartModal, setShowCartModal] = useState(false);

  const wishlist = useSelector((state) => state.wishlist);
  const cart = useSelector((state) => state.cart);

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    const suggestions = products.filter((product) =>
      product.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredSuggestions(suggestions);
  };

  const handleSelect = (suggestion) => {
    setQuery(suggestion);
    setFilteredSuggestions([]);
  };

  const handleSubmit = () => {
    console.log("Searching for:", query);
  };

  return (
    <nav className="flex items-center justify-between px-4 md:px-6 py-4 shadow-sm bg-white sticky top-0 z-50 flex-wrap gap-4">
      <div className="text-2xl font-bold">
        <span className="text-green-600">My </span>
        <span className="text-black">Shop</span>
      </div>

      <div className="relative flex items-center flex-grow max-w-xl gap-2 w-full md:w-auto">
        <div className="w-full relative">
          <Input
            placeholder="Search Products"
            value={query}
            onChange={handleChange}
            className="w-full"
          />
          {filteredSuggestions.length > 0 && (
            <ul className="absolute z-10 bg-white border w-full mt-1 rounded shadow-md max-h-48 overflow-y-auto">
              {filteredSuggestions.map((suggestion, index) => (
                <li
                  key={index}
                  className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                  onClick={() => handleSelect(suggestion)}
                >
                  {suggestion}
                </li>
              ))}
            </ul>
          )}
        </div>
        <Button onClick={handleSubmit} className="px-4 py-2 text-white bg-blue-600 rounded">
          Search
        </Button>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative">
          <Heart
            className="cursor-pointer w-6 h-6"
            onClick={() => setShowWishlistModal(true)}
          />
          {wishlist.items.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-pink-500 text-white rounded-full text-xs px-1">
              {wishlist.items.length}
            </span>
          )}
        </div>

        <div className="relative">
          <ShoppingCart
            className="cursor-pointer w-6 h-6"
            onClick={() => setShowCartModal(true)}
          />
          {cart.items.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-blue-500 text-white rounded-full text-xs px-1">
              {cart.items.length}
            </span>
          )}
        </div>

        <User className="cursor-pointer w-6 h-6" />
      </div>
      {showWishlistModal && (
        <WishlistModal isOpen={showWishlistModal} onClose={() => setShowWishlistModal(false)} />
      )}
      {showCartModal && (
        <CartModal isOpen={showCartModal} onClose={() => setShowCartModal(false)} />
      )}
    </nav>
  );
}
