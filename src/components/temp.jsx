import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromWishlist } from "@/wishlistSlice";
import Modal from "./Modal";

const WishlistModal = ({ isOpen, onClose }) => {
  const wishlistItems = useSelector((state) => state.wishlist.items);
  const dispatch = useDispatch();

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Your Wishlist">
      {wishlistItems.length === 0 ? (
        <p>Your wishlist is empty.</p>
      ) : (
        <div className="space-y-4">
          {wishlistItems.map((item) => (
            <div key={item.id} className="flex items-center justify-between border-b pb-2">
              <img src={item.image} alt={item.name} className="w-12 h-12 rounded" />
              <p>{item.name}</p>
              <button onClick={() => dispatch(removeFromWishlist(item.id))}>🗑</button>
            </div>
          ))}
        </div>
      )}
    </Modal>
  );
};

export default WishlistModal;