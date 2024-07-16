import React from 'react';

const Navbar = () => {
  return (
    <nav className="w-full flex justify-between items-center p-6 sticky top-0 bg-white z-50 shadow-md">
      <div>
        <h1 className="font-semibold text-xl">LOGO</h1>
      </div>
      <div className="gap-4 flex font-bold text-xl">
        <a href="#">Home</a>
        <a href="#">Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;

