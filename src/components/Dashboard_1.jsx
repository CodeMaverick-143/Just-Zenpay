import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { LogOut, History, CreditCard, FileText, Settings } from 'lucide-react';
import Layout from './Layout';

const Dashboard = () => {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    const { error } = await signOut();
    if (!error) {
      navigate('/');
    }
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50">
        {/* Navigation Bar */}
        <nav className="px-6 py-4 lg:px-12 bg-white shadow-sm">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <h1 className="text-2xl font-bold text-black">Zenpay</h1>
            <div className="flex items-center space-x-4">
              <span className="text-gray-600">Welcome, {user?.user_metadata?.username || user?.email}</span>
              <button
                onClick={handleSignOut}
                className="flex items-center space-x-2 px-4 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-all duration-200"
              >
                <LogOut size={20} />
                <span>Sign Out</span>
              </button>
            </div>
          </div>
        </nav>

        {/* Main Dashboard Content */}
        <div className="px-6 py-8 lg:px-12">
          <div className="max-w-7xl mx-auto">
            
            {/* Welcome Section */}
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                Dashboard
              </h2>
              <p className="text-gray-600">
                Manage your invoices, payments, and billing all in one place.
              </p>
            </div>

            {/* Quick Actions Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              
              {/* Create Invoice */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow duration-200 cursor-pointer">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-2 bg-[#2E1880] bg-opacity-10 rounded-lg">
                    <FileText className="w-6 h-6 text-[#2E1880]" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">Create Invoice</h3>
                </div>
                <p className="text-gray-600 text-sm">Generate new invoices for your clients</p>
              </div>

              {/* View Payments */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow duration-200 cursor-pointer">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-2 bg-green-100 rounded-lg">
                    <CreditCard className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">Payments</h3>
                </div>
                <p className="text-gray-600 text-sm">Track and manage your payments</p>
              </div>

              {/* History */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow duration-200 cursor-pointer">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <History className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">History</h3>
                </div>
                <p className="text-gray-600 text-sm">View your previous invoices and transactions</p>
              </div>

              {/* Settings */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow duration-200 cursor-pointer">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-2 bg-gray-100 rounded-lg">
                    <Settings className="w-6 h-6 text-gray-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">Settings</h3>
                </div>
                <p className="text-gray-600 text-sm">Configure your account preferences</p>
              </div>

            </div>

          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;