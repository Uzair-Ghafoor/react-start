import React from 'react';

const Navbar = () => {
  return (
    <div className=' flex p-4 justify-between items-center'>
      <div className=' w-10 h-10 bg-blue-700' />
      <div className=' flex gap-6'>
        <span>About</span>
        <span>Services</span>
        <span>Projects</span>
        <span>Contact</span>
      </div>
    </div>
  );
};

export default Navbar;
