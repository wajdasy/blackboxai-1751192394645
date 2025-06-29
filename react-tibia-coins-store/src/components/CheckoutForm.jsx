import React, { useContext } from 'react';
import { StoreContext } from '../context/StoreContext';
import CharacterValidator from './CharacterValidator';

const CheckoutForm = () => {
  const {
    email,
    setEmail,
    world,
    setWorld,
    paymentMethod,
    setPaymentMethod,
    characterValid,
    showModal,
    setShowModal,
    quantity,
  } = useContext(StoreContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !world || !paymentMethod) {
      alert('Please fill in all required fields and select a payment method.');
      return;
    }
    if (characterValid === false || characterValid === null) {
      alert('Please enter a valid character name.');
      return;
    }
    setShowModal(true);
  };

  return (
    <form onSubmit={handleSubmit} className="flex-1 bg-gray-50 rounded-lg p-6 glass shadow-md">
      <h4 className="text-lg font-semibold mb-4 text-indigo-700">Checkout</h4>
      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700 mb-1">Email Address</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>
      <CharacterValidator />
      <div className="mb-4">
        <label htmlFor="world" className="block text-gray-700 mb-1">World / Server Name</label>
        <input
          type="text"
          id="world"
          value={world}
          onChange={(e) => setWorld(e.target.value)}
          required
          className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 mb-1">Payment Method</label>
        <div className="flex space-x-4">
          <label className="flex items-center space-x-2 cursor-pointer">
            <input
              type="radio"
              name="payment"
              value="PayPal"
              checked={paymentMethod === 'PayPal'}
              onChange={(e) => setPaymentMethod(e.target.value)}
              required
            />
            <span>PayPal</span>
          </label>
          <label className="flex items-center space-x-2 cursor-pointer">
            <input
              type="radio"
              name="payment"
              value="BLIK"
              checked={paymentMethod === 'BLIK'}
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
            <span>BLIK</span>
          </label>
          <label className="flex items-center space-x-2 cursor-pointer">
            <input
              type="radio"
              name="payment"
              value="Bank Transfer"
              checked={paymentMethod === 'Bank Transfer'}
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
            <span>Bank Transfer</span>
          </label>
        </div>
      </div>
      <div className="text-center">
        <button
          type="submit"
          disabled={characterValid === false || characterValid === null}
          className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Confirm Order
        </button>
      </div>
    </form>
  );
};

export default CheckoutForm;
