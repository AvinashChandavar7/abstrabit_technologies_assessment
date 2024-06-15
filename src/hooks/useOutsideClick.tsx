import { useState, useEffect, useCallback, useRef } from 'react';

export const useOutsideClick = (initialState: boolean) => {
  const [isOpen, setIsOpen] = useState(initialState);
  const nodeRef = useRef<HTMLDivElement | null>(null);

  const toggle = () => {
    setIsOpen(prev => !prev);
  };

  const handleClickOutside = useCallback(
    (event: MouseEvent) => {
      if (nodeRef.current && !nodeRef.current.contains(event.target as Node)) {
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

  return { isOpen, toggle, nodeRef };
};
