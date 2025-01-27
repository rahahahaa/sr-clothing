import React from 'react';
import { Leaf, Recycle, Heart } from 'lucide-react';

const Sustainability = () => {
  return (
    <section className="py-20 bg-neutral-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">
            Sustainable Fashion
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our commitment to the environment is as strong as our dedication to style.
            Every piece is crafted with sustainable materials and ethical practices.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6">
            <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center bg-amber-800/10 rounded-full">
              <Leaf className="h-6 w-6 text-amber-800" />
            </div>
            <h3 className="text-xl font-medium text-gray-900 mb-2">Eco Materials</h3>
            <p className="text-gray-600">
              Sustainably sourced fabrics and materials that respect our planet.
            </p>
          </div>

          <div className="text-center p-6">
            <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center bg-amber-800/10 rounded-full">
              <Recycle className="h-6 w-6 text-amber-800" />
            </div>
            <h3 className="text-xl font-medium text-gray-900 mb-2">Zero Waste</h3>
            <p className="text-gray-600">
              Innovative production processes to minimize waste and environmental impact.
            </p>
          </div>

          <div className="text-center p-6">
            <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center bg-amber-800/10 rounded-full">
              <Heart className="h-6 w-6 text-amber-800" />
            </div>
            <h3 className="text-xl font-medium text-gray-900 mb-2">Ethical Production</h3>
            <p className="text-gray-600">
              Fair working conditions and support for local communities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sustainability;