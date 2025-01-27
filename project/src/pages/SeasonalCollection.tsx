import React from 'react';

interface SeasonalCollectionProps {
  season: 'summer' | 'winter' | 'autumn' | 'rainy';
}

const seasonalData = {
  summer: {
    title: 'Summer Collection',
    description: 'Light, breathable pieces perfect for warm days',
    image: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&q=80',
    products: [
      {
        id: 1,
        name: "Linen Blend Shirt",
        price: 89,
        image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&q=80",
        description: "Breathable linen blend for summer comfort"
      },
      {
        id: 2,
        name: "Cotton Dress",
        price: 129,
        image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&q=80",
        description: "Light and airy summer dress"
      }
    ]
  },
  winter: {
    title: 'Winter Collection',
    description: 'Warm, stylish pieces for the cold season',
    image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&q=80',
    products: [
      {
        id: 3,
        name: "Wool Coat",
        price: 299,
        image: "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?auto=format&fit=crop&q=80",
        description: "Premium wool blend winter coat"
      },
      {
        id: 4,
        name: "Cashmere Sweater",
        price: 199,
        image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&q=80",
        description: "Luxurious cashmere for winter warmth"
      }
    ]
  },
  autumn: {
    title: 'Autumn Collection',
    description: 'Transitional pieces for the changing season',
    image: 'https://images.unsplash.com/photo-1511401139252-f158d3209c17?auto=format&fit=crop&q=80',
    products: [
      {
        id: 5,
        name: "Leather Jacket",
        price: 249,
        image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&q=80",
        description: "Classic leather jacket for autumn style"
      },
      {
        id: 6,
        name: "Knit Sweater",
        price: 149,
        image: "https://images.unsplash.com/photo-1584273143981-41c073dfe8f8?auto=format&fit=crop&q=80",
        description: "Comfortable knit for autumn days"
      }
    ]
  },
  rainy: {
    title: 'Rainy Collection',
    description: 'Waterproof and stylish pieces for wet weather',
    image: 'https://images.unsplash.com/photo-1522431745718-63082a85fe6e?auto=format&fit=crop&q=80',
    products: [
      {
        id: 7,
        name: "Waterproof Jacket",
        price: 179,
        image: "https://images.unsplash.com/photo-1545594861-3bef43ff2fc8?auto=format&fit=crop&q=80",
        description: "Stylish protection from the rain"
      },
      {
        id: 8,
        name: "Rain Boots",
        price: 129,
        image: "https://images.unsplash.com/photo-1541750072-95ea2c98e0a1?auto=format&fit=crop&q=80",
        description: "Fashion-forward waterproof boots"
      }
    ]
  }
};

const SeasonalCollection: React.FC<SeasonalCollectionProps> = ({ season }) => {
  const { title, description, image, products } = seasonalData[season];

  return (
    <div className="pt-16 min-h-screen bg-neutral-50">
      <div className="relative h-96 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center text-center">
          <div>
            <h1 className="text-4xl font-serif font-bold text-white mb-4">
              {title}
            </h1>
            <p className="text-white/90 max-w-2xl mx-auto px-4">
              {description}
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="group">
              <div className="relative aspect-square overflow-hidden bg-gray-100">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                />
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

export default SeasonalCollection;