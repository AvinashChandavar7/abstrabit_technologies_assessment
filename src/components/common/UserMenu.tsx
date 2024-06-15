import React, { useState, useRef, useEffect, useCallback } from 'react';

const UserMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setIsOpen(prev => !prev);
  };

  const handleClickOutside = useCallback(
    (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    },
    []
  );

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, handleClickOutside]);

  return (
    <div className="relative">
      <button
        className="flex items-center justify-center gap-2 px-5 py-2 border border-[#4A4ED4] rounded-full"
        onClick={toggleMenu}
      >
        <img src="/assets/user.svg" alt="user menu" className="w-5" />
        <img
          src="/assets/down.svg"
          alt="menu"
          className={`w-2 transition-transform duration-300 transform ${isOpen ? '-rotate-90' : 'rotate-90'}`}
        />
      </button>

      {isOpen && (
        <div className="absolute z-50 top-full right-0 mt-2 w-[238px] flex flex-col items-start justify-evenly shadow font-semibold bg-white rounded-lg overflow-hidden animate-fadeIn" ref={menuRef}>
          <h1 className="w-full p-4 transition-colors cursor-pointer hover:bg-blue-100">My Profile</h1>
          <h1 className="w-full p-4 transition-colors cursor-pointer hover:bg-blue-100">My FDs</h1>
          <h1 className="w-full p-4 transition-colors cursor-pointer hover:bg-blue-100">My Transactions</h1>
          <h1 className="w-full p-4 transition-colors cursor-pointer hover:bg-blue-100">Settings</h1>
        </div>
      )}
    </div>
  );
};

export default UserMenu;

