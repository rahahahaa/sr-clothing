import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { useAuthStore } from './store/useAuthStore';
import Navbar from './components/Navbar';
import Carousel from './components/Carousel';
import FeaturedCollections from './components/FeaturedCollections';
import Footer from './components/Footer';
import ProductDetail from './components/ProductDetail';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import PhoneSignIn from './components/auth/PhoneSignIn';
import About from './components/About';
import Promise from './components/Promise';
import Motto from './components/Motto';
import ExclusiveCollection from './pages/ExclusiveCollection';
import NewArrivals from './pages/NewArrivals';
import SeasonalCollection from './pages/SeasonalCollection';
import Profile from './pages/Profile';
import Orders from './pages/Orders';

// Protected Route component
const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const user = useAuthStore((state) => state.user);
  const loading = useAuthStore((state) => state.loading);
  
  if (loading) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }
  
  if (!user) {
    return <Navigate to="/signin" />;
  }
  
  return <>{children}</>;
};

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-neutral-50">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <main>
              <Carousel />
              <FeaturedCollections />
            </main>
          } />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/phone-signin" element={<PhoneSignIn />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          
          {/* SR Exclusive Routes */}
          <Route path="/exclusive/women" element={<ExclusiveCollection gender="women" />} />
          <Route path="/exclusive/men" element={<ExclusiveCollection gender="men" />} />
          
          {/* New Arrivals */}
          <Route path="/new-arrivals" element={<NewArrivals />} />
          
          {/* Collections Routes */}
          <Route path="/collections/summer" element={<SeasonalCollection season="summer" />} />
          <Route path="/collections/winter" element={<SeasonalCollection season="winter" />} />
          <Route path="/collections/autumn" element={<SeasonalCollection season="autumn" />} />
          <Route path="/collections/rainy" element={<SeasonalCollection season="rainy" />} />
          
          {/* About Routes */}
          <Route path="/about/sr" element={<About />} />
          <Route path="/about/promises" element={<Promise />} />
          <Route path="/about/motto" element={<Motto />} />
          
          {/* Protected Routes */}
          <Route path="/profile" element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          } />
          <Route path="/orders" element={
            <ProtectedRoute>
              <Orders />
            </ProtectedRoute>
          } />
        </Routes>
        <Footer />
        <Toaster position="top-center" />
      </div>
    </Router>
  );
}

export default App;