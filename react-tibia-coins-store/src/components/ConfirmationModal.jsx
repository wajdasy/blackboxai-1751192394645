import React, { useContext } from 'react';
import { StoreContext } from '../context/StoreContext';

const ConfirmationModal = () => {
  const { showModal, setShowModal, quantity } = useContext(StoreContext);

  if (!showModal) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      onClick={() => setShowModal(false)}
    >
      <div
        className="bg-white bg-opacity-80 backdrop-blur-md rounded-xl max-w-md w-full shadow-lg p-8 text-center"
        onClick={(e) => e.stopPropagation()}
      >
        <h3 className="text-2xl font-semibold text-indigo-700 mb-4">Order Confirmed!</h3>
        <p className="mb-4">
          Thank you for your purchase of <span className="font-bold">{quantity} Tibia Coins</span>.
        </p>
        <p className="mb-4">
          Estimated delivery time: <span className="font-semibold">Within 15 minutes</span>.
        </p>
        <button
          onClick={() => setShowModal(false)}
          className="mt-4 bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default ConfirmationModal;
