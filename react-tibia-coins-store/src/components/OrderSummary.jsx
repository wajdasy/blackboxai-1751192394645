import React, { useContext } from 'react';
import { StoreContext } from '../context/StoreContext';

const OrderSummary = () => {
  const { quantity, price } = useContext(StoreContext);

  return (
    <div className="flex-1 bg-white rounded-xl shadow-lg p-6 neumorph mt-8 md:mt-0">
      <h2 className="text-2xl font-semibold text-indigo-700 mb-6 text-center">Order Summary</h2>
      <div className="text-gray-700 text-lg space-y-4">
        <div>
          <span className="font-semibold">Quantity:</span> {quantity} Tibia Coins
        </div>
        <div>
          <span className="font-semibold">Price:</span> {price.toFixed(2)} PLN
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
