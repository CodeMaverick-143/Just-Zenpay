import React from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from './Layout';

const AboutUs = () => {
  const navigate = useNavigate();

  const handleBackToHome = () => {
    navigate('/');
  };

  const handleGetStarted = () => {
    navigate('/login');
  };

  return (
    <Layout>
      <div className="min-h-screen bg-white">
      {/* Navigation Bar */}
      <nav className="px-6 py-4 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl font-bold text-black">Zenpay</h1>
        </div>
      </nav>

      {/* Main Content */}
      <div className="px-6 py-8 lg:px-12">
        <div className="max-w-4xl mx-auto space-y-12">
          
          {/* Main Heading */}
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-12">
            About Us
          </h1>

          {/* What is Zenpay Section */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-900">
              What is Zenpay?
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Zenpay is a modern digital invoicing solution crafted to simplify and transform how businesses handle billing. With a focus on ease, efficiency, and eco-consciousness, Zenpay brings clarity and control to your transactions — all in one sleek, seamless platform.
            </p>
          </section>

          {/* Our Mission Section */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-900">
              Our Mission
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              We aim to minimize the reliance on traditional hardcopy billing systems by introducing efficient digital solutions — creating not only a better workflow, but also contributing to a greener, eco-friendly future.
            </p>
          </section>

          {/* Why Zenpay was Started Section */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-900">
              Why Zenpay was Started
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              After facing daily frustration in collecting, managing, and tracking paper bills, we realized the need for a better solution. Zenpay was created to bridge this gap — helping individuals and businesses go fully digital and take control of their financial organization.
            </p>
          </section>

          {/* Our Values Section */}
          <section className="space-y-8">
            <h2 className="text-2xl font-bold text-gray-900">
              Our Values
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Simplicity Card */}
              <div className="bg-white border border-gray-200 rounded-lg p-6 aspect-square flex flex-col justify-center items-start hover:scale-105 hover:shadow-lg transition-all duration-300">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Simplicity
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  We remove complexity
                </p>
              </div>

              {/* Trust Card */}
              <div className="bg-white border border-gray-200 rounded-lg p-6 aspect-square flex flex-col justify-center items-start hover:scale-105 hover:shadow-lg transition-all duration-300">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Trust
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Your data stays yours
                </p>
              </div>

              {/* Innovation Card */}
              <div className="bg-white border border-gray-200 rounded-lg p-6 aspect-square flex flex-col justify-center items-start hover:scale-105 hover:shadow-lg transition-all duration-300">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Innovation
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  We move fast and improve
                </p>
              </div>

              {/* Empathy Card */}
              <div className="bg-white border border-gray-200 rounded-lg p-6 aspect-square flex flex-col justify-center items-start hover:scale-105 hover:shadow-lg transition-all duration-300">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Empathy
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  We listen, adapt, and care
                </p>
              </div>
            </div>
          </section>

          {/* CTA Buttons Section */}
          <section className="pt-12 pb-8">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={handleBackToHome}
                className="px-8 py-4 bg-white text-gray-700 font-semibold border-2 border-gray-300 rounded-lg hover:border-gray-400 hover:bg-gray-50 transition-all duration-200"
              >
                Back
              </button>
              <button 
                onClick={handleGetStarted}
                className="px-8 py-4 bg-[#2E1880] text-white font-semibold rounded-lg hover:bg-[#241260] transition-colors duration-200 shadow-lg hover:shadow-xl"
              >
                Get Started
              </button>
            </div>
          </section>

        </div>
      </div>
      </div>
    </Layout>
  );
};

export default AboutUs;