import React, { useContext } from 'react';
import { StoreContext } from '../context/StoreContext';

const CoinSelector = () => {
  const { quantity, setQuantity, price } = useContext(StoreContext);

  const handleChange = (e) => {
    const value = Number(e.target.value);
    if (value % 25 === 0) {
      setQuantity(value);
    }
  };

  return (
    <div className="flex-1 mb-8 md:mb-0 bg-white rounded-xl shadow-lg p-6 neumorph">
      <h2 className="text-2xl font-semibold text-indigo-700 mb-6 text-center">Purchase Tibia Coins</h2>
      <label htmlFor="quantity" className="block text-gray-700 font-medium mb-2">
        Select Quantity (Multiples of 25)
      </label>
      <input
        type="range"
        id="quantity"
        min="25"
        max="500"
        step="25"
        value={quantity}
        onChange={handleChange}
        className="w-full"
      />
      <div className="mt-4 text-center text-xl font-semibold text-indigo-600">{quantity} Tibia Coins</div>
      <div className="mt-2 text-center text-lg text-gray-700">
        Price: <span className="font-bold">{price.toFixed(2)} PLN</span>
      </div>
    </div>
  );
};

export default CoinSelector;
