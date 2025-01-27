import React from 'react';

const Motto = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-neutral-50 py-20 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-800/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gray-400/5 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-serif font-bold text-gray-900 mb-12 transition-all duration-700 hover:text-amber-800">
            Our Brand Motto
          </h2>
          <div className="space-y-8">
            <p className="text-2xl text-amber-800 italic leading-relaxed transition-all duration-500 hover:scale-105 transform">
              "Where fashion embodies balance and equality."
            </p>
            <p className="text-xl text-gray-600 leading-relaxed transition-all duration-500 hover:text-gray-900">
              Embrace the strength of unity through designs that speak to both men and women.
            </p>
            <p className="text-xl font-serif text-amber-800 transition-all duration-500 hover:scale-105 transform">
              Wear your values, wear SR.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Motto;