import React from 'react';

const Promise = () => {
  return (
    <section className="min-h-screen bg-white py-20 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-amber-800/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-gray-400/5 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Visual element */}
          <div className="relative h-[400px] rounded-lg overflow-hidden bg-gradient-to-br from-amber-800/10 to-gray-400/10">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-32 h-32 rounded-full bg-amber-800/20 animate-pulse" />
            </div>
            <div className="absolute inset-0 backdrop-blur-sm" />
          </div>
          
          <div className="text-left">
            <h2 className="text-4xl font-serif font-bold text-gray-900 mb-8 transition-all duration-700 hover:text-amber-800">
              Our Promise
            </h2>
            <div className="space-y-8">
              <p className="text-gray-600 leading-relaxed transition-all duration-500 hover:text-gray-900">
                At SR, we believe that every interaction with our brand should be as seamless and enjoyable 
                as the clothing we create. From browsing to buying, we focus on providing an intuitive and 
                personalized shopping experience, ensuring our customers feel valued every step of the way.
              </p>
              <p className="text-gray-600 leading-relaxed transition-all duration-500 hover:text-gray-900">
                Our commitment to quality goes beyond our designs—it's embedded in the entire experience, 
                from effortless navigation to timely delivery and customer support. We put our buyers first, 
                because your satisfaction is the heart of everything we do.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Promise;