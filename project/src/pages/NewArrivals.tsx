import React from 'react';

const products = [
  {
    id: 1,
    name: "Limited Edition Jacket",
    price: 399,
    image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&q=80",
    description: "Exclusive new arrival, limited quantities available"
  },
  {
    id: 2,
    name: "Designer Collection Dress",
    price: 299,
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&q=80",
    description: "Part of our latest designer collaboration"
  },
  {
    id: 3,
    name: "Premium Denim Collection",
    price: 199,
    image: "https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&q=80",
    description: "Sustainable denim with modern styling"
  }
];

const NewArrivals = () => {
  return (
    <div className="pt-16 min-h-screen bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-serif font-bold text-gray-900 mb-4">
            New Arrivals
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Be the first to explore our latest collections. Each piece is carefully curated 
            to bring you the best in contemporary fashion.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="group">
              <div className="relative aspect-square overflow-hidden bg-gray-100">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-amber-800 text-white px-3 py-1 text-sm">
                    New
                  </span>
                </div>
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button className="bg-white text-gray-900 px-6 py-3 transform -translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
              <div className="mt-4 space-y-2">
                <h3 className="text-lg font-medium text-gray-900">{product.name}</h3>
                <p className="text-gray-500">{product.description}</p>
                <p className="text-lg font-medium text-amber-800">${product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewArrivals;