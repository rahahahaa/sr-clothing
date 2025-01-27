import React from 'react';
import { useParams } from 'react-router-dom';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
}

interface ExclusiveCollectionProps {
  gender: 'men' | 'women';
}

const ExclusiveCollection: React.FC<ExclusiveCollectionProps> = ({ gender }) => {
  // Mock products data - in a real app, this would come from an API
  const products: Product[] = gender === 'women' ? [
    {
      id: 1,
      name: "Elegant Evening Dress",
      price: 299,
      image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?auto=format&fit=crop&q=80",
      description: "A stunning evening dress perfect for special occasions"
    },
    {
      id: 2,
      name: "Professional Blazer",
      price: 199,
      image: "https://images.unsplash.com/photo-1548624149-f20d8aa1b3c6?auto=format&fit=crop&q=80",
      description: "A sophisticated blazer for the modern professional woman"
    }
  ] : [
    {
      id: 3,
      name: "Classic Suit",
      price: 499,
      image: "https://images.unsplash.com/photo-1617137968427-85924c800a22?auto=format&fit=crop&q=80",
      description: "A timeless suit for the modern gentleman"
    },
    {
      id: 4,
      name: "Casual Blazer",
      price: 299,
      image: "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?auto=format&fit=crop&q=80",
      description: "A versatile blazer perfect for both casual and formal occasions"
    }
  ];

  return (
    <div className="pt-16 min-h-screen bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-serif font-bold text-gray-900 mb-8">
          {gender === 'women' ? 'S Collection' : 'R Collection'}
        </h1>
        
        <p className="text-gray-600 mb-12 max-w-3xl">
          {gender === 'women' 
            ? 'Discover our exclusive collection for women, where elegance meets contemporary style. Each piece is crafted to empower and inspire.'
            : 'Explore our premium collection for men, combining classic sophistication with modern design. Every garment tells a story of refinement and confidence.'
          }
        </p>

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

export default ExclusiveCollection;