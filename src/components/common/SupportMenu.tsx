import React, { useState, useRef, useEffect, useCallback } from 'react';

interface MenuItemProps {
  icon: string;
  children: React.ReactNode;
}

const MenuItem: React.FC<MenuItemProps> = ({ icon, children }) => (
  <div className="flex items-center justify-start w-full gap-5 p-4 px-5 py-2 transition-colors border-b cursor-pointer hover:bg-blue-100">
    <img src={icon} alt="user menu" className="w-5" />
    <div>{children}</div>
  </div>
);

const SupportMenu: React.FC = () => {
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
    <div className="relative" ref={menuRef}>
      <button onClick={toggleMenu}>
        Support
      </button>

      {isOpen && (
        <div className="absolute z-50 top-full right-0 mt-2 w-[238px] flex flex-col items-start justify-evenly shadow font-semibold bg-white text-[#3B39D9] text-sm rounded-lg overflow-hidden animate-fadeIn">
          <MenuItem icon="/assets/user.svg">
            <p>+91 88777 37777</p>
            <p>+91 88777 5666</p>
          </MenuItem>

          <MenuItem icon="/assets/user.svg">
            <p>support@silverbullet.in</p>
            <p>info@silverbullet.in</p>
          </MenuItem>
        </div>
      )}
    </div>
  );
};

export default SupportMenu;
