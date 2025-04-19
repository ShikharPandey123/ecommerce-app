import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, increaseQty, decreaseQty } from "@/cartSlice";
import Modal from "./Modal";

const CartModal = ({ isOpen, onClose }) => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Your Cart">
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="space-y-4">
          {cartItems.map((item) => (
            <div key={item.id} className="flex items-center justify-between border-b pb-2">
              <img src={item.image} alt={item.name} className="w-12 h-12 rounded" />
              <div>
                <p>{item.name}</p>
                <div className="flex items-center gap-2">
                  <button onClick={() => dispatch(decreaseQty(item.id))}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => dispatch(increaseQty(item.id))}>+</button>
                </div>
              </div>
              <button onClick={() => dispatch(removeFromCart(item.id))}>🗑</button>
            </div>
          ))}
          <p className="text-right font-bold">Total: ₹{total}</p>
        </div>
      )}
    </Modal>
  );
};

export default CartModal;