import React, { useRef, useState } from 'react';
import { Artwork } from '../data/artworks';

interface ArtworkCardProps {
  artwork: Artwork;
  onClick: (artwork: Artwork) => void;
}

const ArtworkCard: React.FC<ArtworkCardProps> = ({ artwork, onClick }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const timeoutRef = useRef<number | null>(null);
  
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [glarePosition, setGlarePosition] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);

  // 3D Tilt Logic
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const maxRotation = 10; // Subtler rotation for OS feel
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = ((y - centerY) / centerY) * -maxRotation; 
    const rotateY = ((x - centerX) / centerX) * maxRotation;

    setRotation({ x: rotateX, y: rotateY });
    
    setGlarePosition({
        x: (x / rect.width) * 100,
        y: (y / rect.height) * 100
    });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    
    // Play video preview
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(e => console.error("Autoplay prevented", e));
      
      // Stop after 5 seconds (preview mode)
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      timeoutRef.current = window.setTimeout(() => {
        if (videoRef.current) {
          videoRef.current.pause();
        }
      }, 5000); 
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotation({ x: 0, y: 0 }); 
    
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  return (
    <div 
      className="relative perspective-1000 w-full" 
      style={{ perspective: '1200px' }}
    >
      <div 
        ref={cardRef}
        className="w-full aspect-square relative transform-style-3d transition-all duration-300 ease-out cursor-pointer group"
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={() => onClick(artwork)}
        style={{
          transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) scale3d(${isHovered ? 1.05 : 1}, ${isHovered ? 1.05 : 1}, 1)`,
          willChange: 'transform',
        }}
      >
        {/* Card Content Container - Monochrome Icon Style */}
        <div className={`absolute inset-0 bg-[#222] rounded-[22px] overflow-hidden transition-all duration-300 ${isHovered ? 'shadow-[0_20px_40px_-10px_rgba(255,255,255,0.1)] border-white border-2' : 'shadow-xl border border-white/5'}`}>
            
            {/* Thumbnail */}
            <img 
                src={artwork.thumbnailUrl} 
                alt={artwork.title}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${isHovered ? 'opacity-0' : 'opacity-100'}`}
            />

            {/* Video Preview */}
            {/* ❌ video 태그 지우고 iframe으로 교체! */}
            <iframe 
                // 💡 미리보기용 주소인 previewVideoUrl을 사용합니다.
                src={artwork.previewVideoUrl}
                frameBorder="0"
                allow="autoplay"
                allowFullScreen
                // 유튜브 플레이어 스타일을 숨기기 위해 클래스 추가 (필수)
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
            />

            {/* Glossy Reflection Gradient (Glassmorphism) */}
            <div 
                className="absolute inset-0 pointer-events-none mix-blend-soft-light"
                style={{
                    background: isHovered 
                        ? `radial-gradient(circle at ${glarePosition.x}% ${glarePosition.y}%, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0) 80%)`
                        : 'linear-gradient(to bottom, rgba(255,255,255,0.05) 0%, rgba(0,0,0,0.1) 100%)'
                }}
            />
            
            {/* Info Overlay on Hover - Monochrome */}
            <div className="absolute inset-0 flex flex-col justify-end p-4 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
               <span className="text-[10px] font-mono text-white uppercase tracking-wider mb-0.5">{artwork.artist}</span>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ArtworkCard;