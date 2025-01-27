import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, ShoppingBag, User, X, LogOut } from 'lucide-react';
import { useAuthStore } from '../store/useAuthStore';
import Cart from './Cart';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout>();
  const navigate = useNavigate();
  const { user, signOut } = useAuthStore();

  const handleSignOut = async () => {
    try {
      await signOut();
      navigate('/signin');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  const handleAuthClick = () => {
    if (user) {
      setIsProfileMenuOpen(!isProfileMenuOpen);
    } else {
      navigate('/signin');
    }
  };

  const handleDropdownEnter = (dropdown: string) => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setActiveDropdown(dropdown);
  };

  const handleDropdownLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 200);
  };

  useEffect(() => {
    return () => {
      if (dropdownTimeoutRef.current) {
        clearTimeout(dropdownTimeoutRef.current);
      }
    };
  }, []);

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-serif font-bold">
              <span className="text-gray-600">S</span>
              <span className="text-amber-800">R</span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {/* SR Exclusive Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => handleDropdownEnter('exclusive')}
              onMouseLeave={handleDropdownLeave}
            >
              <button className="text-gray-700 hover:text-gray-900 py-2">
                SR Exclusive
              </button>
              {activeDropdown === 'exclusive' && (
                <div className="absolute left-0 mt-0 w-48 bg-white shadow-lg py-2 transition-all duration-200 ease-in-out">
                  <Link to="/exclusive/women" className="block px-4 py-3 text-gray-700 hover:bg-gray-50">
                    S Collection (Women)
                  </Link>
                  <Link to="/exclusive/men" className="block px-4 py-3 text-gray-700 hover:bg-gray-50">
                    R Collection (Men)
                  </Link>
                </div>
              )}
            </div>

            <Link to="/new-arrivals" className="text-gray-700 hover:text-gray-900 py-2">
              New Arrivals
            </Link>

            {/* Collections Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => handleDropdownEnter('collections')}
              onMouseLeave={handleDropdownLeave}
            >
              <button className="text-gray-700 hover:text-gray-900 py-2">
                Collections
              </button>
              {activeDropdown === 'collections' && (
                <div className="absolute left-0 mt-0 w-48 bg-white shadow-lg py-2">
                  <Link to="/collections/summer" className="block px-4 py-3 text-gray-700 hover:bg-gray-50">
                    Summer Collection
                  </Link>
                  <Link to="/collections/winter" className="block px-4 py-3 text-gray-700 hover:bg-gray-50">
                    Winter Collection
                  </Link>
                  <Link to="/collections/autumn" className="block px-4 py-3 text-gray-700 hover:bg-gray-50">
                    Autumn Collection
                  </Link>
                  <Link to="/collections/rainy" className="block px-4 py-3 text-gray-700 hover:bg-gray-50">
                    Rainy Collection
                  </Link>
                </div>
              )}
            </div>

            {/* About Us Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => handleDropdownEnter('about')}
              onMouseLeave={handleDropdownLeave}
            >
              <button className="text-gray-700 hover:text-gray-900 py-2">
                About Us
              </button>
              {activeDropdown === 'about' && (
                <div className="absolute left-0 mt-0 w-48 bg-white shadow-lg py-2">
                  <Link to="/about/sr" className="block px-4 py-3 text-gray-700 hover:bg-gray-50">
                    About SR
                  </Link>
                  <Link to="/about/promises" className="block px-4 py-3 text-gray-700 hover:bg-gray-50">
                    Our Promises
                  </Link>
                  <Link to="/about/motto" className="block px-4 py-3 text-gray-700 hover:bg-gray-50">
                    Brand Motto
                  </Link>
                </div>
              )}
            </div>

            <div className="flex items-center space-x-4">
              <Cart />
              
              {/* User Profile/Auth Button */}
              <div className="relative">
                <button
                  onClick={handleAuthClick}
                  className="p-2 text-gray-700 hover:text-gray-900 flex items-center space-x-2"
                >
                  <User className="h-6 w-6" />
                  {user && <span className="text-sm">{user.displayName || 'User'}</span>}
                </button>

                {/* Profile Dropdown Menu */}
                {user && isProfileMenuOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg py-2">
                    <Link
                      to="/profile"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-50"
                      onClick={() => setIsProfileMenuOpen(false)}
                    >
                      Profile
                    </Link>
                    <Link
                      to="/orders"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-50"
                      onClick={() => setIsProfileMenuOpen(false)}
                    >
                      Orders
                    </Link>
                    <button
                      onClick={handleSignOut}
                      className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50 flex items-center"
                    >
                      <LogOut className="h-4 w-4 mr-2" />
                      Sign Out
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="md:hidden flex items-center">
            <Cart />
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="ml-4">
              {isMenuOpen ? (
                <X className="h-6 w-6 text-gray-700" />
              ) : (
                <Menu className="h-6 w-6 text-gray-700" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white">
            <div className="border-b pb-2">
              <div className="px-3 py-2 font-medium">SR Exclusive</div>
              <Link to="/exclusive/women" className="block px-6 py-2 text-gray-600">S Collection (Women)</Link>
              <Link to="/exclusive/men" className="block px-6 py-2 text-gray-600">R Collection (Men)</Link>
            </div>
            
            <Link to="/new-arrivals" className="block px-3 py-2 text-gray-700">New Arrivals</Link>
            
            <div className="border-b pb-2">
              <div className="px-3 py-2 font-medium">Collections</div>
              <Link to="/collections/summer" className="block px-6 py-2 text-gray-600">Summer Collection</Link>
              <Link to="/collections/winter" className="block px-6 py-2 text-gray-600">Winter Collection</Link>
              <Link to="/collections/autumn" className="block px-6 py-2 text-gray-600">Autumn Collection</Link>
              <Link to="/collections/rainy" className="block px-6 py-2 text-gray-600">Rainy Collection</Link>
            </div>
            
            <div className="border-b pb-2">
              <div className="px-3 py-2 font-medium">About Us</div>
              <Link to="/about/sr" className="block px-6 py-2 text-gray-600">About SR</Link>
              <Link to="/about/promises" className="block px-6 py-2 text-gray-600">Our Promises</Link>
              <Link to="/about/motto" className="block px-6 py-2 text-gray-600">Brand Motto</Link>
            </div>
            
            {user ? (
              <>
                <Link to="/profile" className="block px-3 py-2 text-gray-700">Profile</Link>
                <Link to="/orders" className="block px-3 py-2 text-gray-700">Orders</Link>
                <button
                  onClick={handleSignOut}
                  className="block w-full text-left px-3 py-2 text-gray-700 flex items-center"
                >
                  <LogOut className="h-4 w-4 mr-2" />
                  Sign Out
                </button>
              </>
            ) : (
              <Link to="/signin" className="block px-3 py-2 text-gray-700">Sign In</Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;