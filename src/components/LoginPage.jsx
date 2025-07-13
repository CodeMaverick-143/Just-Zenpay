import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Layout from './Layout';

const LoginPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  const handleBackToHome = () => {
    navigate('/');
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      {/* Back Button */}
      <button
        onClick={handleBackToHome}
        className="absolute top-6 left-6 p-2 text-gray-600 hover:text-gray-900 hover:bg-white rounded-full transition-all duration-200 shadow-sm hover:shadow-md"
      >
        <ArrowLeft size={24} />
      </button>
      
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
        {isLogin ? (
          // Login Form
          <div>
            <h2 className="text-2xl font-bold text-gray-900 text-center mb-6">
              Login to Zenpay
            </h2>
            
            <form className="space-y-4">
              <div>
                <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1">
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2E1880] focus:border-transparent"
                  placeholder="Enter your username"
                />
              </div>
              
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2E1880] focus:border-transparent"
                  placeholder="Enter your password"
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-[#2E1880] text-white font-semibold py-2 px-4 rounded-md hover:bg-[#241260] transition-colors duration-200"
              >
                Login
              </button>
            </form>
            
            <p className="text-center text-sm text-gray-600 mt-4">
              New to Zenpay?{' '}
              <button
                onClick={toggleForm}
                className="text-[#2E1880] hover:text-[#241260] font-medium underline"
              >
                Register
              </button>
            </p>
          </div>
        ) : (
          // Register Form
          <div>
            <h2 className="text-2xl font-bold text-gray-900 text-center mb-6">
              Create an Account
            </h2>
            
            <form className="space-y-4">
              <div>
                <label htmlFor="reg-username" className="block text-sm font-medium text-gray-700 mb-1">
                  Username
                </label>
                <input
                  type="text"
                  id="reg-username"
                  name="username"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2E1880] focus:border-transparent"
                  placeholder="Choose a username"
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2E1880] focus:border-transparent"
                  placeholder="Enter your phone number"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2E1880] focus:border-transparent"
                  placeholder="Enter your email"
                />
              </div>
              
              <div>
                <label htmlFor="reg-password" className="block text-sm font-medium text-gray-700 mb-1">
                  Password
                </label>
                <input
                  type="password"
                  id="reg-password"
                  name="password"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2E1880] focus:border-transparent"
                  placeholder="Create a password"
                />
              </div>
              
              <div>
                <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700 mb-1">
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="confirm-password"
                  name="confirmPassword"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2E1880] focus:border-transparent"
                  placeholder="Confirm your password"
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-[#2E1880] text-white font-semibold py-2 px-4 rounded-md hover:bg-[#241260] transition-colors duration-200"
              >
                Register
              </button>
            </form>
            
            <p className="text-center text-sm text-gray-600 mt-4">
              Already have an account?{' '}
              <button
                onClick={toggleForm}
                className="text-[#2E1880] hover:text-[#241260] font-medium underline"
              >
                Login
              </button>
            </p>
          </div>
        )}
      </div>
      </div>
    </Layout>
  );
};

export default LoginPage;