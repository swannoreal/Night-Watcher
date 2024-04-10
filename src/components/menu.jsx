import React, { useState } from 'react';

function DropdownMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
    // Here you can add logic based on the selected option, like navigating to a different page or performing an action
    console.log('Selected option:', option);
  };

  return (
    <div className="dropdown">
      <button onClick={toggleMenu} className="dropdown-toggle">
        {selectedOption || 'Options'}
      </button>
      {isOpen && (
        <ul className="dropdown-menu">
          <li onClick={() => handleOptionClick('Login/Logout')}>Login/Logout</li>
          <li onClick={() => handleOptionClick('Parameters')}>Parameters</li>
        </ul>
      )}
    </div>
  );
}

export default DropdownMenu;