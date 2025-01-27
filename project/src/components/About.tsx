import React from 'react';

const About = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-neutral-50 py-20 relative overflow-hidden">
      {/* Decorative blur elements */}
      <div className="absolute -top-40 -left-40 w-80 h-80 bg-amber-800/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-gray-400/10 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-serif font-bold text-gray-900 mb-8 transition-all duration-700 hover:text-amber-800">
            About SR
          </h2>
          <div className="space-y-8 text-gray-600 leading-relaxed">
            <p className="transition-all duration-500 hover:text-gray-900">
              SR is more than just a clothing brand; it's a celebration of balance, respect, and inclusivity. 
              With a unique focus on gender neutrality, SR represents the harmonious blend of masculine and feminine energies. 
              The 'S' and 'R' in our name symbolize women and men, respectively, embodied in a palette of grey and brown tones, 
              reflecting equality and mutual respect.
            </p>
            <p className="transition-all duration-500 hover:text-gray-900">
              Our designs are crafted to embody modern sophistication while championing unity and diversity, 
              creating a fashion statement that stands for balance in every aspect of life. Join us on a journey 
              where style meets purpose, and fashion speaks the language of equality.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;