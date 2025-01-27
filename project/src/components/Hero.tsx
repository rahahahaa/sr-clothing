import React from 'react';

const Hero = () => {
  return (
    <div className="relative h-screen">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80"
          alt="Fashion model"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/70 to-transparent"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="max-w-lg">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">
            Your style is your story—tell it the way you want
          </h1>
          <p className="text-lg text-gray-200 mb-8">
            From city streets to inner peace, our designs capture the essence of modern self-expression. 
            Each piece is a canvas where urban culture meets positive energy, creating wearable art that speaks to the heart.
          </p>
          <button className="bg-white text-gray-900 px-8 py-3 rounded-none hover:bg-gray-100 transition-colors">
            Explore Collections
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;