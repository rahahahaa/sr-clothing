import React, { useState } from 'react';

const BrandInfo = () => {
  const [activeTab, setActiveTab] = useState('about');

  return (
    <section className="bg-white py-12 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center space-x-8 mb-8">
          <button
            onClick={() => setActiveTab('about')}
            className={`text-sm font-medium transition-colors ${
              activeTab === 'about' ? 'text-amber-800 border-b-2 border-amber-800' : 'text-gray-500 hover:text-gray-900'
            }`}
          >
            About SR
          </button>
          <button
            onClick={() => setActiveTab('promise')}
            className={`text-sm font-medium transition-colors ${
              activeTab === 'promise' ? 'text-amber-800 border-b-2 border-amber-800' : 'text-gray-500 hover:text-gray-900'
            }`}
          >
            Our Promise
          </button>
          <button
            onClick={() => setActiveTab('motto')}
            className={`text-sm font-medium transition-colors ${
              activeTab === 'motto' ? 'text-amber-800 border-b-2 border-amber-800' : 'text-gray-500 hover:text-gray-900'
            }`}
          >
            Brand Motto
          </button>
        </div>

        <div className="max-w-3xl mx-auto">
          {activeTab === 'about' && (
            <div className="text-center space-y-4">
              <p className="text-gray-600">
                SR is more than just a clothing brand; it's a celebration of balance, respect, and inclusivity. 
                With a unique focus on gender neutrality, SR represents the harmonious blend of masculine and feminine energies.
              </p>
              <p className="text-gray-600">
                The 'S' and 'R' in our name symbolize women and men, respectively, embodied in a palette of grey and brown tones, 
                reflecting equality and mutual respect.
              </p>
            </div>
          )}

          {activeTab === 'promise' && (
            <div className="text-center space-y-4">
              <p className="text-gray-600">
                At SR, we believe that every interaction with our brand should be as seamless and enjoyable 
                as the clothing we create. From browsing to buying, we focus on providing an intuitive and 
                personalized shopping experience.
              </p>
              <p className="text-gray-600">
                Our commitment to quality goes beyond our designs—it's embedded in the entire experience, 
                from effortless navigation to timely delivery and customer support.
              </p>
            </div>
          )}

          {activeTab === 'motto' && (
            <div className="text-center space-y-4">
              <p className="text-xl text-amber-800 italic">
                "Where fashion embodies balance and equality."
              </p>
              <p className="text-gray-600">
                Embrace the strength of unity through designs that speak to both men and women.
              </p>
              <p className="text-lg font-serif text-amber-800">
                Wear your values, wear SR.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default BrandInfo;