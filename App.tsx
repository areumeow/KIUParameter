import React, { useState, useEffect } from 'react';
import TextPressure from './components/TextPressure';
import GrainOverlay from './components/GrainOverlay';
import Gallery from './components/Gallery';
import ProductModal from './components/ProductModal';
import { Artwork } from './data/artworks';

const App: React.FC = () => {
  const [selectedArtwork, setSelectedArtwork] = useState<Artwork | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState('');
  
  // State for interactions
  const [likedIds, setLikedIds] = useState<Set<string>>(new Set());
  const [recentIds, setRecentIds] = useState<string[]>([]);

  // Clock for Menu Bar
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(now.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true }));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleArtworkSelect = (artwork: Artwork) => {
    setSelectedArtwork(artwork);
    setIsModalOpen(true);
    
    // Add to recent list (prevent duplicates, keep last 20)
    setRecentIds(prev => {
      const newRecent = [artwork.id, ...prev.filter(id => id !== artwork.id)];
      return newRecent.slice(0, 20);
    });
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const toggleLike = (id: string) => {
    setLikedIds(prev => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  return (
    <div className="relative w-full min-h-screen bg-black text-white selection:bg-white selection:text-black font-sans overflow-x-hidden">
      
      {/* Fixed Background Ambience (macOS Wallpaper Style) */}
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_50%_50%,#111111_0%,#000000_100%)] pointer-events-none z-0" />
      <div className="fixed inset-0 bg-gradient-to-t from-black via-transparent to-black/20 pointer-events-none z-0" />
      <div className="fixed inset-0 pointer-events-none z-50 opacity-30">
         <GrainOverlay />
      </div>

      {/* macOS Menu Bar */}
      <header className="fixed top-0 left-0 right-0 h-8 bg-black/40 backdrop-blur-md border-b border-white/10 z-[100] flex items-center justify-between px-4 text-xs font-medium select-none">
        <div className="flex items-center gap-4">
          <span className="text-lg">~</span>
          <span className="font-bold">parameter</span>
          <span className="hidden sm:block opacity-80 hover:opacity-100 cursor-default">File</span>
          <span className="hidden sm:block opacity-80 hover:opacity-100 cursor-default">Edit</span>
          <span className="hidden sm:block opacity-80 hover:opacity-100 cursor-default">View</span>
          <span className="hidden sm:block opacity-80 hover:opacity-100 cursor-default">Window</span>
          <span className="hidden sm:block opacity-80 hover:opacity-100 cursor-default">Help</span>
        </div>
        <div className="flex items-center gap-4 opacity-90">
          <span className="hidden sm:block">100%</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" /></svg>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
          <span>{currentTime}</span>
        </div>
      </header>

      {/* Hero Section (Desktop) */}
      <section className="relative h-screen w-full flex flex-col items-center justify-center z-10 pt-8">
        
        {/* Glow behind text - White/Grey for monochrome */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-white/5 rounded-full blur-[100px] pointer-events-none mix-blend-screen" />

        <main className="relative w-full max-w-[95vw] md:max-w-[80vw] flex flex-col items-center">
          <div className="absolute -top-32 md:-top-32 left-0 text-white/40 text-[10px] tracking-[0.2em] font-mono border border-white/10 px-3 py-1 rounded-full backdrop-blur-sm">
             Mentor Mentee Program
          </div>

          <div className="w-full py-12 md:py-24 cursor-default mix-blend-lighten">
             <TextPressure 
               text="PARAMETER" 
               minWeight={100} 
               maxWeight={900}
             />
          </div>

          <div className="mt-12 md:mt-20 flex flex-col items-center gap-4 animate-bounce opacity-50">
             <span className="text-[10px] uppercase tracking-widest text-white/60">Scroll to Explore</span>
             <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
          </div>
        </main>
      </section>

      {/* Gallery Section (Finder Window) */}
      <Gallery 
        onArtworkSelect={handleArtworkSelect} 
        likedIds={likedIds}
        recentIds={recentIds}
      />

      {/* Modals */}
      <ProductModal 
        artwork={selectedArtwork} 
        isOpen={isModalOpen} 
        onClose={handleCloseModal} 
        isLiked={selectedArtwork ? likedIds.has(selectedArtwork.id) : false}
        onToggleLike={toggleLike}
      />
    </div>
  );
};

export default App;