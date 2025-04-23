"use client";

import React, { useState } from "react";

const PlaceOrder = ({ productId }) => {
  const [quantity, setQuantity] = useState(1);
  const [customerName, setCustomerName] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const [courier, setCourier] = useState("steadfast");
  const [address, setAddress] = useState("");
  const [codAmount, setCodAmount] = useState("");
  const [deliveryCharge, setDeliveryCharge] = useState("80");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!customerName || !customerPhone || !address || !codAmount) {
      setError("Please fill all required fields.");
      return;
    }

    setError("");
    setLoading(true);

    const payload = {
      product_ids: productId.toString(),
      s_product_qty: quantity.toString(),
      c_phone: customerPhone,
      c_name: customerName,
      courier: courier,
      address: address,
      advance: null,
      cod_amount: codAmount,
      discount_amount: null,
      delivery_charge: deliveryCharge,
    };

    try {
      const res = await fetch(
        "https://admin.refabry.com/api/public/order/create",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }
      );

      if (!res.ok) {
        const errData = await res.json();
        throw new Error(errData.message || "Failed to place order");
      }

      setSuccess(true);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="max-w-md mx-auto p-6 bg-green-50 rounded-lg shadow-md text-center text-green-700 font-semibold">
        Thank you! Your order has been placed successfully.
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-lg space-y-6 sm:space-y-8"
    >
      <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
        Place Your Order
      </h2>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Product ID
        </label>
        <input
          type="text"
          value={productId}
          readOnly
          className="w-full rounded-md border border-gray-300 bg-gray-100 py-2 px-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Customer Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            value={customerName}
            onChange={(e) => setCustomerName(e.target.value)}
            required
            placeholder="Your full name"
            className="w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Phone Number <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            value={customerPhone}
            onChange={(e) => setCustomerPhone(e.target.value)}
            required
            placeholder="017xxxxxxxx"
            className="w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Quantity <span className="text-red-500">*</span>
          </label>
          <input
            type="number"
            min="1"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            required
            className="w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Courier <span className="text-red-500">*</span>
          </label>
          <select
            value={courier}
            onChange={(e) => setCourier(e.target.value)}
            required
            className="w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
          >
            <option value="steadfast">Steadfast</option>
            <option value="pathao">Pathao</option>
            <option value="redx">RedX</option>
          </select>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Address <span className="text-red-500">*</span>
        </label>
        <textarea
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
          rows={3}
          placeholder="Delivery address"
          className="w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition resize-none"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Cash on Delivery Amount <span className="text-red-500">*</span>
          </label>
          <input
            type="number"
            min="0"
            value={codAmount}
            onChange={(e) => setCodAmount(e.target.value)}
            required
            placeholder="Total COD amount"
            className="w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Delivery Charge
          </label>
          <input
            type="number"
            min="0"
            value={deliveryCharge}
            onChange={(e) => setDeliveryCharge(e.target.value)}
            placeholder="Delivery charge"
            className="w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
          />
        </div>
      </div>

      {error && (
        <p className="text-red-600 font-medium text-center mt-2">{error}</p>
      )}

      <button
        type="submit"
        disabled={loading}
        className="w-full py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 disabled:opacity-60 disabled:cursor-not-allowed transition"
      >
        {loading ? "Placing Order..." : "Place Order"}
      </button>
    </form>
  );
};
export default PlaceOrder;
