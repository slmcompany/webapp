import React, { useEffect, useState, useRef } from 'react';

interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export const Drawer: React.FC<DrawerProps> = ({ isOpen, onClose, children }) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [translateY, setTranslateY] = useState(100);
  const [isDragging, setIsDragging] = useState(false);
  const dragStartY = useRef(0);
  const dragStartTranslateY = useRef(0);
  const lastTouchY = useRef(0);
  const lastTranslateY = useRef(0);
  const velocityY = useRef(0);
  const lastTimestamp = useRef(Date.now());
  
  useEffect(() => {
    if (isOpen) {
      setIsAnimating(true);
      setTranslateY(0);
    } else if (!isDragging) {
      setTranslateY(100);
    }
  }, [isOpen]);

  const handleAnimationEnd = () => {
    if (!isOpen && translateY >= 100) {
      setIsAnimating(false);
    }
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    dragStartY.current = e.touches[0].clientY;
    dragStartTranslateY.current = translateY;
    lastTouchY.current = e.touches[0].clientY;
    lastTimestamp.current = Date.now();
    velocityY.current = 0;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;

    const touchY = e.touches[0].clientY;
    const deltaY = touchY - dragStartY.current;
    const newTranslateY = Math.max(0, Math.min(100, dragStartTranslateY.current + (deltaY / window.innerHeight) * 100));
    
    // Calculate velocity
    const now = Date.now();
    const dt = now - lastTimestamp.current;
    const dy = touchY - lastTouchY.current;
    velocityY.current = dy / dt; // pixels per millisecond

    lastTouchY.current = touchY;
    lastTimestamp.current = now;
    lastTranslateY.current = newTranslateY;
    
    setTranslateY(newTranslateY);
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
    
    // Use velocity to determine whether to close or snap back
    const shouldClose = velocityY.current > 0.5 || translateY > 50;
    
    if (shouldClose) {
      onClose();
    } else {
      setTranslateY(0);
    }
    
    velocityY.current = 0;
  };

  if (!isOpen && !isAnimating) return null;

  const overlayOpacity = Math.max(0, Math.min(0.3, (100 - translateY) / 100 * 0.3));

  return (
    <>
      {/* Overlay */}
      <div 
        className="fixed inset-0 bg-[#27273E] z-40 transition-opacity duration-200"
        style={{ opacity: overlayOpacity }}
        onClick={onClose}
      />
      
      {/* Drawer */}
      <div 
        className={`
          fixed bottom-0 left-0 right-0 bg-white rounded-t-2xl z-50
          transform transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)]
          touch-none select-none
          ${isDragging ? 'transition-none' : ''}
        `}
        style={{ 
          transform: `translateY(${translateY}%)`,
          touchAction: 'none'
        }}
        onTransitionEnd={handleAnimationEnd}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Handle */}
        <div className="w-full h-6 flex items-center justify-center cursor-grab touch-none">
          <div className="w-8 h-1 bg-[#D9D9D9] rounded-full" />
        </div>
        
        {children}
      </div>
    </>
  );
}; 