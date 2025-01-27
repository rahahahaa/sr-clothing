import React from 'react';
import { useAuthStore } from '../store/useAuthStore';

const Profile = () => {
  const user = useAuthStore((state) => state.user);

  return (
    <div className="pt-24 min-h-screen bg-neutral-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white shadow-lg p-8">
          <h1 className="text-3xl font-serif font-bold text-gray-900 mb-8">
            Profile
          </h1>
          
          <div className="space-y-6">
            <div>
              <h2 className="text-lg font-medium text-gray-900 mb-2">Personal Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Name</label>
                  <p className="mt-1 text-gray-900">{user?.displayName || 'Not set'}</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Email</label>
                  <p className="mt-1 text-gray-900">{user?.email || 'Not set'}</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-lg font-medium text-gray-900 mb-2">Account Settings</h2>
              <div className="space-y-4">
                <button className="text-amber-800 hover:text-amber-700">
                  Change Password
                </button>
                <div className="block">
                  <button className="text-amber-800 hover:text-amber-700">
                    Update Profile Information
                  </button>
                 </div>
              </div>
            </div>

            <div>
              <h2 className="text-lg font-medium text-gray-900 mb-2">Preferences</h2>
              <div className="space-y-4">
                <div className="flex items-center">
                  <input
                    id="marketing"
                    type="checkbox"
                    className="h-4 w-4 text-amber-800 focus:ring-amber-500 border-gray-300 rounded"
                  />
                  <label htmlFor="marketing" className="ml-2 text-gray-700">
                    Receive marketing emails
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    id="notifications"
                    type="checkbox"
                    className="h-4 w-4 text-amber-800 focus:ring-amber-500 border-gray-300 rounded"
                  />
                  <label htmlFor="notifications" className="ml-2 text-gray-700">
                    Order status notifications
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;