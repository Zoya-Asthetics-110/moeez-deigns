
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
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const onMouseDown = () => setIsMouseDown(true);
    const onMouseUp = () => setIsMouseDown(false);

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Check if it's a clickable element or has a pointer cursor defined in CSS
      const isClickable = 
        target.tagName === 'BUTTON' || 
        target.tagName === 'A' || 
        target.closest('button') || 
        target.closest('a') || 
        target.closest('.cursor-pointer') ||
        window.getComputedStyle(target).cursor === 'pointer';
      
      setIsHovering(!!isClickable);
    };

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);
    window.addEventListener('mouseover', onMouseOver);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      window.removeEventListener('mouseover', onMouseOver);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
    };
  }, [isVisible]);

  // Smooth elastic follow logic for the outer ring
  useEffect(() => {
    let animationFrameId: number;
    
    const updateTrail = () => {
      const ease = 0.15;
      trailRef.current.x += (position.x - trailRef.current.x) * ease;
      trailRef.current.y += (position.y - trailRef.current.y) * ease;

      if (ringRef.current) {
        // Apply smooth transformations to the outer ring
        ringRef.current.style.transform = `translate3d(${trailRef.current.x - 22}px, ${trailRef.current.y - 22}px, 0) scale(${isHovering ? 2.2 : isMouseDown ? 0.8 : 1})`;
      }
      if (dotRef.current) {
        // Keep the central dot locked to the exact mouse position
        dotRef.current.style.transform = `translate3d(${position.x - 5}px, ${position.y - 5}px, 0) scale(${isMouseDown ? 0.6 : 1})`;
      }

      animationFrameId = requestAnimationFrame(updateTrail);
    };

    updateTrail();
    return () => cancelAnimationFrame(animationFrameId);
  }, [position, isHovering, isMouseDown]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[99999] hidden lg:block">
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
