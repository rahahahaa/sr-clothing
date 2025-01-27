import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <span className="text-2xl font-serif font-bold text-white">
              <span className="text-gray-400">S</span>
              <span className="text-amber-700">R</span>
            </span>
            <p className="mt-4 text-sm">
              Where fashion embodies balance and equality. Wear your values, wear SR.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">Shop</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="text-sm hover:text-white">New Arrivals</a></li>
              <li><a href="#" className="text-sm hover:text-white">Gender Neutral</a></li>
              <li><a href="#" className="text-sm hover:text-white">Women</a></li>
              <li><a href="#" className="text-sm hover:text-white">Men</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">Company</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="text-sm hover:text-white">About Us</a></li>
              <li><a href="#" className="text-sm hover:text-white">Sustainability</a></li>
              <li><a href="#" className="text-sm hover:text-white">Careers</a></li>
              <li><a href="#" className="text-sm hover:text-white">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">Newsletter</h3>
            <p className="mt-4 text-sm">
              Subscribe to receive updates, access to exclusive deals, and more.
            </p>
            <form className="mt-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-none focus:outline-none focus:ring-2 focus:ring-amber-800"
              />
              <button className="mt-2 w-full bg-amber-800 text-white px-4 py-2 hover:bg-amber-700 transition-colors">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-sm text-center">
          <p>&copy; {new Date().getFullYear()} SR Clothing. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;