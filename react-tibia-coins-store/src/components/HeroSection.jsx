import React from 'react';

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-20 text-center">
      <div className="container mx-auto px-4 max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Buy Tibia Coins Easily & Securely</h1>
        <p className="text-lg md:text-xl mb-8">
          Get your Tibia Coins instantly with our safe and fast service. Choose your quantity and checkout with multiple payment options.
        </p>
        <a href="#purchase" className="inline-block bg-white text-indigo-700 font-semibold px-8 py-3 rounded-lg shadow-lg hover:bg-gray-100 transition">
          Buy Now
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
