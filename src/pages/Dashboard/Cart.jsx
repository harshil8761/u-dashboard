import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { FaMinus, FaPlus, FaTrash } from "react-icons/fa";

const Cart = () => {
  const { cartItems, inc, dec, getCartTotal, removeItem } =
    useContext(CartContext);

  if (cartItems.length === 0) {
    return (
      <div className="text-center py-16 bg-white rounded-lg shadow-sm">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Your cart is empty
        </h2>
        <p className="text-gray-500 mb-8">
          Looks like you haven't added anything yet.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900"> Cart</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-4">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="bg-white p-4 rounded-lg shadow flex items-center justify-between gap-4"
            >
              <div className="flex items-center gap-4 flex-1">
                <img
                  src={item.image}
                  alt=""
                  className="w-16 h-16 object-contain"
                />
                <div>
                  <h3 className="text-sm font-medium text-gray-900 line-clamp-1">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-500">₹{item.price}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="p-1 flex items-center border rounded-md">
                  <button
                    className="p-1 hover:bg-gray-200 cursor-pointer"
                    onClick={() => dec(item.id)}
                  >
                    <FaMinus size={16} />
                  </button>
                  <span className="px-2 text-sm">{item.quantity}</span>
                  <button
                    className="p-1 hover:bg-gray-200 cursor-pointer"
                    onClick={() => inc(item.id)}
                  >
                    <FaPlus size={16} />
                  </button>
                </div>
                <button
                  className="text-red-800 cursor-pointer"
                  onClick={() => removeItem(item.id)}
                >
                  <FaTrash size={18} />
                </button>
              </div>
            </div>
          ))}
          {/* <button className="text-sm text-red-600 hover:text-red-800 font-medium" >Clear Cart</button> */}
        </div>
        <div className="lg:col-span-1">
          <div className="bg-white p-6 rounded-lg shadow-sm sticky top-24">
            <h2 className="text-lg font-bold text-gray-900 mb-4">
              Order Summary
            </h2>
            <div className="space-y-2 mb-4">
              <div className="flex justify-between text-gray-600">
                <span>Subtotal</span>
                <span>₹{getCartTotal}</span>
              </div>
            </div>
            <div className="border-t pt-4 flex justify-between font-bold text-lg text-gray-900 mb-6">
              <span>Total</span>
              <span>₹{getCartTotal}</span>
            </div>
            <button className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors cursor-pointer">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
