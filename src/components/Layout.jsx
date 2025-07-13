import React from 'react';

const Layout = ({ children }) => {
  return (
    <div className="relative min-h-screen">
      {/* Left vertical line */}
      <div className="fixed left-0 top-0 h-screen w-3 bg-[#2E1880] z-[-1]" />
      
      {/* Right vertical line */}
      <div className="fixed right-0 top-0 h-screen w-3 bg-[#2E1880] z-[-1]" />
      
      {/* Main content */}
      {children}
    </div>
  );
};

export default Layout;