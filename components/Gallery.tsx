import React, { useState, useMemo } from 'react';
import { artworks, Artwork } from '../data/artworks';
import ArtworkCard from './ArtworkCard';

interface GalleryProps {
  onArtworkSelect: (artwork: Artwork) => void;
  likedIds: Set<string>;
  recentIds: string[];
}

type FilterType = 'all' | 'recent' | 'liked' | 'artist';

const Gallery: React.FC<GalleryProps> = ({ onArtworkSelect, likedIds, recentIds }) => {
  const [activeFilter, setActiveFilter] = useState<FilterType>('all');
  const [artistFilter, setArtistFilter] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  // Filtering Logic
  const filteredArtworks = useMemo(() => {
    let filtered = artworks;

    // 1. Filter by View Type
    if (activeFilter === 'recent') {
      filtered = filtered.filter(art => recentIds.includes(art.id));
      // Sort by recent order
      filtered.sort((a, b) => recentIds.indexOf(a.id) - recentIds.indexOf(b.id));
    } else if (activeFilter === 'liked') {
      filtered = filtered.filter(art => likedIds.has(art.id));
    } else if (activeFilter === 'artist' && artistFilter) {
      filtered = filtered.filter(art => art.artist === artistFilter);
    }

    // 2. Filter by Search Query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(art => 
        art.title.toLowerCase().includes(query) || 
        art.artist.toLowerCase().includes(query)
      );
    }

    return filtered;
  }, [activeFilter, artistFilter, likedIds, recentIds, searchQuery]);

  // Handlers
  const handleFilterClick = (type: FilterType, artistName?: string) => {
    setActiveFilter(type);
    if (artistName) {
      setArtistFilter(artistName);
    } else {
      setArtistFilter(null);
    }
  };

  const artists = ['SongSeungHwa', 'JangMyu', 'JeongAreum'];

  return (
    <section id="gallery" className="w-full relative z-20 pb-32 pt-10 px-2 md:px-0 bg-transparent flex justify-center">
      {/* macOS Window Container */}
      <div className="w-full max-w-7xl bg-[#1e1e1e]/80 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row h-auto min-h-[80vh]">
        
        {/* Sidebar (Desktop) */}
        <div className="hidden md:flex w-64 bg-[#111]/50 border-r border-white/5 flex-col p-5 backdrop-blur-md shrink-0">
           {/* Traffic Lights */}
           <div className="flex gap-2 mb-8 opacity-50 hover:opacity-100 transition-opacity">
              <div className="w-3 h-3 rounded-full bg-[#3a3a3a] shadow-inner border border-black/20"></div>
              <div className="w-3 h-3 rounded-full bg-[#3a3a3a] shadow-inner border border-black/20"></div>
              <div className="w-3 h-3 rounded-full bg-[#3a3a3a] shadow-inner border border-black/20"></div>
           </div>

           <div className="space-y-6">
              <div>
                <h3 className="text-[11px] font-semibold text-neutral-500 uppercase tracking-wider mb-2 px-2">Library</h3>
                <ul className="space-y-1">
                  <li 
                    onClick={() => handleFilterClick('all')}
                    className={`flex items-center gap-2 px-2 py-1.5 rounded-md text-sm cursor-pointer transition-all ${activeFilter === 'all' ? 'bg-white text-black font-medium shadow-sm' : 'text-neutral-400 hover:bg-white/5 hover:text-white'}`}
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg>
                    All Works
                  </li>
                  <li 
                    onClick={() => handleFilterClick('recent')}
                    className={`flex items-center gap-2 px-2 py-1.5 rounded-md text-sm cursor-pointer transition-all ${activeFilter === 'recent' ? 'bg-white text-black font-medium shadow-sm' : 'text-neutral-400 hover:bg-white/5 hover:text-white'}`}
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    Recent
                  </li>
                  <li 
                    onClick={() => handleFilterClick('liked')}
                    className={`flex items-center gap-2 px-2 py-1.5 rounded-md text-sm cursor-pointer transition-all ${activeFilter === 'liked' ? 'bg-white text-black font-medium shadow-sm' : 'text-neutral-400 hover:bg-white/5 hover:text-white'}`}
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                    Liked
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-[11px] font-semibold text-neutral-500 uppercase tracking-wider mb-2 px-2">Artists</h3>
                <ul className="space-y-1">
                  {artists.map(artist => (
                    <li 
                      key={artist}
                      onClick={() => handleFilterClick('artist', artist)}
                      className={`px-2 py-1.5 rounded-md text-sm cursor-pointer transition-colors flex items-center gap-2 ${activeFilter === 'artist' && artistFilter === artist ? 'bg-white/10 text-white' : 'text-neutral-400 hover:bg-white/5 hover:text-white'}`}
                    >
                       <span className={`w-2 h-2 rounded-full ${activeFilter === 'artist' && artistFilter === artist ? 'bg-white' : 'bg-neutral-600'}`}></span> {artist}
                    </li>
                  ))}
                </ul>
              </div>
           </div>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 bg-[#0a0a0a]/50 flex flex-col min-h-[500px]">
          
          {/* Window Header / Toolbar */}
          <div className="h-16 md:h-14 border-b border-white/5 flex flex-col md:flex-row items-center justify-between px-4 md:px-6 bg-white/5 backdrop-blur-sm gap-2 py-2 md:py-0">
             <div className="flex items-center gap-4 w-full md:w-auto justify-between md:justify-start">
               <div className="flex gap-2 hidden md:flex">
                  <button onClick={() => handleFilterClick('all')} className="p-1.5 rounded-md hover:bg-white/10 text-neutral-400">
                     <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                  </button>
               </div>
               <span className="text-xs md:text-sm font-semibold text-white/80 whitespace-nowrap">Portfolio 2025</span>
               
               {/* Mobile Search Icon Placeholder (expandable logic could go here, keeping simple for now) */}
             </div>

             <div className="flex items-center gap-3 w-full md:w-auto">
               <div className="relative w-full md:w-auto">
                 <svg className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                 <input 
                   type="text" 
                   value={searchQuery}
                   onChange={(e) => setSearchQuery(e.target.value)}
                   placeholder="Search" 
                   className="bg-black/40 border border-white/10 rounded-md py-1.5 pl-9 pr-4 text-xs text-white focus:outline-none focus:border-white/30 focus:bg-white/5 w-full md:w-32 focus:md:w-48 transition-all placeholder:text-neutral-600" 
                 />
               </div>
             </div>
          </div>

          {/* Mobile Filter Scroll Bar */}
          <div className="md:hidden w-full overflow-x-auto border-b border-white/5 bg-black/20">
            <div className="flex items-center gap-2 p-3 min-w-max">
                <button 
                    onClick={() => handleFilterClick('all')} 
                    className={`px-3 py-1 text-xs rounded-full border transition-colors ${activeFilter === 'all' ? 'bg-white text-black border-white' : 'bg-transparent text-neutral-400 border-white/10'}`}
                >
                    All
                </button>
                <button 
                    onClick={() => handleFilterClick('recent')} 
                    className={`px-3 py-1 text-xs rounded-full border transition-colors ${activeFilter === 'recent' ? 'bg-white text-black border-white' : 'bg-transparent text-neutral-400 border-white/10'}`}
                >
                    Recent
                </button>
                <button 
                    onClick={() => handleFilterClick('liked')} 
                    className={`px-3 py-1 text-xs rounded-full border transition-colors ${activeFilter === 'liked' ? 'bg-white text-black border-white' : 'bg-transparent text-neutral-400 border-white/10'}`}
                >
                    Liked
                </button>
                <div className="w-[1px] h-4 bg-white/10 mx-1"></div>
                {artists.map(artist => (
                    <button 
                        key={artist}
                        onClick={() => handleFilterClick('artist', artist)}
                        className={`px-3 py-1 text-xs rounded-full border transition-colors ${activeFilter === 'artist' && artistFilter === artist ? 'bg-white text-black border-white' : 'bg-transparent text-neutral-400 border-white/10'}`}
                    >
                        {artist}
                    </button>
                ))}
            </div>
          </div>

          {/* Grid Content */}
          <div className="flex-1 overflow-y-auto p-4 md:p-8 scrollbar-hide">
            {filteredArtworks.length === 0 ? (
                <div className="w-full h-full flex flex-col items-center justify-center text-neutral-600 gap-2 min-h-[200px]">
                    <svg className="w-10 h-10 opacity-20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
                    <span className="text-sm font-mono">No items found</span>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 perspective-origin-center pb-20">
                {filteredArtworks.map((art) => (
                    <div key={art.id} className="flex flex-col items-center gap-3 group">
                    <ArtworkCard artwork={art} onClick={onArtworkSelect} />
                    <div className="flex flex-col items-center">
                        <span className="text-sm md:text-xs font-medium text-neutral-400 group-hover:text-white transition-colors">{art.title}</span>
                        <span className="text-[10px] text-neutral-600">{art.artist}</span>
                    </div>
                    </div>
                ))}
                </div>
            )}
          </div>

          {/* Footer Status Bar */}
          <div className="h-8 border-t border-white/5 bg-[#1e1e1e]/50 backdrop-blur flex items-center justify-between px-4 text-[10px] text-neutral-500 font-mono hidden md:flex">
             <span>{filteredArtworks.length} items</span>
             <span>{(3.45).toFixed(2)} GB available</span>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Gallery;