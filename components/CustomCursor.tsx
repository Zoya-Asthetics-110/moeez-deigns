
import React, { useEffect, useState, useRef } from 'react';

const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  
  const trailRef = useRef({ x: -100, y: -100 });
  const ringRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      // Use clientX and clientY for viewport-relative positioning
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
      
      // Dynamic hover check: manually check the element at current position
      // since global 'cursor: none' can interfere with standard hover styles
      const target = e.target as HTMLElement;
      if (target) {
        const isClickable = 
          target.tagName === 'BUTTON' || 
          target.tagName === 'A' || 
          target.closest('button') || 
          target.closest('a') || 
          target.closest('.cursor-pointer') ||
          target.classList.contains('cursor-pointer');
        
        setIsHovering(!!isClickable);
      }
    };

    const onMouseDown = () => setIsMouseDown(true);
    const onMouseUp = () => setIsMouseDown(false);

    // Use a more robust visibility check
    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);
    
    // Attach to document to ensure it covers the whole viewport reliably
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
    };
  }, [isVisible]);

  // Smooth elastic follow logic for the outer ring using requestAnimationFrame
  useEffect(() => {
    let animationFrameId: number;
    
    const updateTrail = () => {
      const ease = 0.15;
      trailRef.current.x += (position.x - trailRef.current.x) * ease;
      trailRef.current.y += (position.y - trailRef.current.y) * ease;

      if (ringRef.current) {
        // Precise transform for the outer ring
        ringRef.current.style.transform = `translate3d(${trailRef.current.x - 22}px, ${trailRef.current.y - 22}px, 0) scale(${isHovering ? 2.2 : isMouseDown ? 0.8 : 1})`;
      }
      if (dotRef.current) {
        // Precise transform for the center dot
        dotRef.current.style.transform = `translate3d(${position.x - 5}px, ${position.y - 5}px, 0) scale(${isMouseDown ? 0.6 : 1})`;
      }

      animationFrameId = requestAnimationFrame(updateTrail);
    };

    updateTrail();
    return () => cancelAnimationFrame(animationFrameId);
  }, [position, isHovering, isMouseDown]);

  // Prevent rendering if not visible or if window is too small
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[999999] hidden lg:block overflow-hidden">
      {/* Thick Outer Glow Ring (Elastic Follower) */}
      <div 
        ref={ringRef}
        className={`fixed top-0 left-0 w-11 h-11 border-[3.5px] rounded-full transition-[border-color,background-color] duration-500 ease-out will-change-transform flex items-center justify-center ${
          isHovering 
            ? 'border-purple-500 bg-purple-500/15 shadow-[0_0_25px_rgba(168,85,247,0.5)]' 
            : 'border-cyan-400 bg-transparent shadow-[0_0_10px_rgba(34,211,238,0.2)]'
        }`}
      >
        <div className={`w-full h-full rounded-full blur-lg opacity-40 ${isHovering ? 'bg-purple-500 animate-pulse' : 'bg-cyan-400'}`}></div>
      </div>

      {/* Center Core Dot (Locked Follower) */}
      <div 
        ref={dotRef}
        className={`fixed top-0 left-0 w-2.5 h-2.5 rounded-full transition-colors duration-300 will-change-transform shadow-[0_0_20px_rgba(34,211,238,1)] ${
          isHovering ? 'bg-purple-300' : 'bg-white'
        }`}
      />
    </div>
  );
};

export default CustomCursor;
