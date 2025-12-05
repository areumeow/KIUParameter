import React, { useEffect, useRef, useState } from 'react';
import { TextPressureProps } from '../types';

const TextPressure: React.FC<TextPressureProps> = ({
  text = 'PARAMETER',
  className = '',
  minWeight = 50,
  maxWeight = 1000,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const charsRef = useRef<(HTMLSpanElement | null)[]>([]);
  
  // We use references for mouse position to avoid re-renders on every frame
  const mouseRef = useRef({ x: 0, y: 0 });
  const [hasInteracted, setHasInteracted] = useState(false);

  useEffect(() => {
    // Handle mouse movement globally to allow effect even when cursor is slightly outside
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
      if (!hasInteracted) setHasInteracted(true);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [hasInteracted]);

  useEffect(() => {
    let animationFrameId: number;

    const animate = () => {
      if (containerRef.current) {
        // Calculate physics/styles for each character
        charsRef.current.forEach((charSpan, index) => {
          if (!charSpan) return;

          const rect = charSpan.getBoundingClientRect();
          const charCenterX = rect.left + rect.width / 2;
          const charCenterY = rect.top + rect.height / 2;

          // Distance logic
          const dx = mouseRef.current.x - charCenterX;
          const dy = mouseRef.current.y - charCenterY;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          // Determine the "Pressure" radius
          const maxDist = 400; 
          
          // Calculate weight based on proximity
          // Closer = Heavier
          let weight = minWeight;
          let scaleY = 1;
          let letterSpacing = 0;
          let textShadowBlur = 0;

          if (distance < maxDist) {
            const factor = 1 - distance / maxDist; // 0 to 1 (1 being extremely close)
            
            // Non-linear easing for more dramatic effect close up
            const easedFactor = Math.pow(factor, 2); 

            weight = minWeight + easedFactor * (maxWeight - minWeight);
            
            // "Squash" effect: As weight increases, scale Y down slightly to simulate pressure
            // But usually bold text looks better if it stays tall, so we might actually grow it or keep it 1.
            // Let's make it compress slightly vertically to look "heavy"
            scaleY = 1 - (easedFactor * 0.1); 

            // Add glow intensity based on proximity
            textShadowBlur = easedFactor * 30;
          }

          // Apply styles directly to DOM for performance (bypassing React render cycle)
          charSpan.style.fontVariationSettings = `'wght' ${weight}`;
          // Also set standard font-weight as backup/helper
          charSpan.style.fontWeight = `${Math.floor(weight)}`;
          
          // Transform logic
          // We can add a slight skew towards the mouse if we wanted, but let's stick to the "Pressure" look (Scale)
          charSpan.style.transform = `scaleY(${scaleY})`;
          
          // Dynamic glow
          charSpan.style.textShadow = `0 0 ${textShadowBlur}px rgba(255, 255, 255, ${Math.min(textShadowBlur / 50, 0.8)})`;
        });
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [minWeight, maxWeight, text]); // Re-run if props change

  return (
    <div 
      ref={containerRef}
      className={`relative flex w-full justify-between select-none ${className}`}
      style={{ isolation: 'isolate' }}
    >
      {text.split('').map((char, i) => (
        <span
          key={i}
          ref={(el) => { charsRef.current[i] = el; }}
          className="inline-block transition-transform will-change-transform origin-bottom"
          style={{
            fontFamily: '"Inter", sans-serif',
            fontSize: 'clamp(50px, 12vw, 200px)', // Responsive clamp for mobile optimization
            lineHeight: '1',
            color: 'white',
            fontWeight: minWeight, // Initial state
          }}
        >
          {char}
        </span>
      ))}
    </div>
  );
};

export default TextPressure;