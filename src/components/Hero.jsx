import React from 'react';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/login');
  };

  const handleAboutUs = () => {
    navigate('/about');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Bar */}
      <nav className="px-6 py-4 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-2xl font-bold text-black">Zenpay</h1>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="px-6 py-12 lg:px-12 lg:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Peaceful Payments.{' '}
                  <span className="block">Powerful Control</span>
                </h1>
                
                <p className="text-lg lg:text-xl text-gray-600 leading-relaxed max-w-lg">
                  Send invoices, get paid, and manage billing — all in one calm and modern interface.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={handleGetStarted}
                  className="px-8 py-4 bg-[#2E1880] text-white font-semibold rounded-lg hover:bg-[#241260] transition-colors duration-200 shadow-lg hover:shadow-xl"
                >
                  Get Started
                </button>
                <button 
                  onClick={handleAboutUs}
                  className="px-8 py-4 bg-white text-gray-700 font-semibold border-2 border-gray-300 rounded-lg hover:border-gray-400 hover:bg-gray-50 transition-all duration-200"
                >
                  About us
                </button>
              </div>
            </div>

            {/* Right Dashboard Mockup */}
            <div className="lg:pl-8">
              <div className="bg-white rounded-2xl shadow-2xl p-6 lg:p-8 max-w-md mx-auto lg:max-w-none">
                
                {/* Dashboard Header */}
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-lg font-semibold text-gray-900">Recent</h3>
                  <div className="flex space-x-2">
                    <div className="w-4 h-4 bg-gray-200 rounded-full"></div>
                    <div className="w-4 h-4 bg-gray-200 rounded-full"></div>
                    <div className="w-4 h-4 bg-gray-200 rounded-full"></div>
                  </div>
                </div>

                {/* Tab Navigation */}
                <div className="flex space-x-1 mb-8 bg-gray-100 p-1 rounded-lg">
                  <button className="flex-1 py-2 px-4 bg-white text-gray-900 font-medium rounded-md shadow-sm text-sm">
                    Invoices
                  </button>
                  <button className="flex-1 py-2 px-4 text-gray-600 font-medium rounded-md text-sm hover:bg-white hover:text-gray-900 transition-all">
                    Payments
                  </button>
                  <button className="flex-1 py-2 px-4 text-gray-600 font-medium rounded-md text-sm hover:bg-white hover:text-gray-900 transition-all">
                    Clients
                  </button>
                </div>

                {/* Content Rows */}
                <div className="space-y-4 mb-8">
                  <div className="flex justify-between items-center py-3 border-b border-gray-100">
                    <div className="w-32 h-3 bg-gray-200 rounded"></div>
                    <div className="w-16 h-3 bg-gray-200 rounded"></div>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-100">
                    <div className="w-40 h-3 bg-gray-200 rounded"></div>
                    <div className="w-12 h-3 bg-gray-200 rounded"></div>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-100">
                    <div className="w-28 h-3 bg-gray-200 rounded"></div>
                    <div className="w-20 h-3 bg-gray-200 rounded"></div>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-100">
                    <div className="w-36 h-3 bg-gray-200 rounded"></div>
                    <div className="w-14 h-3 bg-gray-200 rounded"></div>
                  </div>
                </div>

                {/* Payment Status Section */}
                <div className="pt-4 border-t border-gray-100">
                  <h4 className="text-sm font-semibold text-gray-900 mb-3">Payment Status</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <div className="w-24 h-2 bg-gray-200 rounded"></div>
                      <div className="w-16 h-2 bg-gray-200 rounded"></div>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="w-20 h-2 bg-gray-200 rounded"></div>
                      <div className="w-12 h-2 bg-gray-200 rounded"></div>
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;