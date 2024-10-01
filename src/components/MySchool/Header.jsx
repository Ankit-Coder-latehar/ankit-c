import React from 'react';

const Header = () => {
  return (
    <div className="flex justify-between items-center p-4 bg-white shadow">
      <div className="text-lg font-bold">My School</div>
      <div className="flex items-center space-x-4">
        <span>School Name</span>
        <i className="fas fa-user-circle"></i>
      </div>
    </div>
  );
};

export default Header;
