import React from 'react';

const collections = [
  {
    id: 1,
    name: 'Neutral Essentials',
    description: 'Timeless pieces that transcend gender boundaries',
    price: 'Starting at $89',
    image: 'https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?auto=format&fit=crop&q=80',
    category: 'Gender Neutral'
  },
  {
    id: 2,
    name: 'Urban Sophistication',
    description: 'Contemporary elegance for the modern woman',
    price: 'Starting at $129',
    image: 'https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?auto=format&fit=crop&q=80',
    category: 'Women'
  },
  {
    id: 3,
    name: 'Modern Classic',
    description: 'Refined essentials for the contemporary man',
    price: 'Starting at $99',
    image: 'https://images.unsplash.com/photo-1617137968427-85924c800a22?auto=format&fit=crop&q=80',
    category: 'Men'
  },
  {
    id: 4,
    name: 'Fluid Fashion',
    description: 'Breaking boundaries with bold, fluid designs',
    price: 'Starting at $149',
    image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80',
    category: 'Gender Neutral'
  },
  {
    id: 5,
    name: 'Seasonal Harmony',
    description: 'Where style meets seasonal versatility',
    price: 'Starting at $119',
    image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&q=80',
    category: 'Gender Neutral'
  },
  {
    id: 6,
    name: 'Evening Balance',
    description: 'Elegant evening wear for all',
    price: 'Starting at $199',
    image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&q=80',
    category: 'Gender Neutral'
  }
];

const FeaturedCollections = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">
            Featured Collections
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our latest collections that celebrate individuality and balance
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {collections.map((collection) => (
            <div key={collection.id} className="group cursor-pointer">
              <div className="relative overflow-hidden">
                <img
                  src={collection.image}
                  alt={collection.name}
                  className="w-full h-96 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute inset-0 flex flex-col justify-end p-6">
                    <span className="text-white text-sm mb-2">{collection.category}</span>
                    <h3 className="text-white text-xl font-medium mb-2">{collection.name}</h3>
                    <p className="text-white/80 text-sm mb-2">{collection.description}</p>
                    <p className="text-white font-medium">{collection.price}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="bg-amber-800 text-white px-8 py-3 hover:bg-amber-700 transition-colors">
            View All Collections
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCollections;