import React, { useEffect, useState } from 'react';
import { Artwork } from '../data/artworks';

interface ProductModalProps {
  artwork: Artwork | null;
  isOpen: boolean;
  onClose: () => void;
  isLiked: boolean;
  onToggleLike: (id: string) => void;
}

type DonationStatus = 'idle' | 'payment' | 'completed';

const ProductModal: React.FC<ProductModalProps> = ({ artwork, isOpen, onClose, isLiked, onToggleLike }) => {
  const [donationStatus, setDonationStatus] = useState<DonationStatus>('idle');

  // Reset status when modal opens or artwork changes
  useEffect(() => {
    if (isOpen) {
      setDonationStatus('idle');
    }
  }, [isOpen, artwork]);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  if (!isOpen || !artwork) return null;

  const handleDownload = () => {
    // Programmatic download trigger
    const link = document.createElement('a');
    link.href = artwork.videoUrl;
    link.download = `${artwork.title}.mp4`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-2 md:p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300" 
        onClick={onClose}
      />

      {/* macOS Window Style Modal - Monochrome */}
      <div className="relative z-10 w-full max-w-5xl bg-[#111]/90 backdrop-blur-2xl border border-white/10 rounded-xl shadow-[0_0_80px_rgba(0,0,0,0.8)] flex flex-col md:flex-row overflow-hidden animate-in fade-in zoom-in-95 duration-200 ring-1 ring-white/10 h-auto md:min-h-[500px] max-h-[90vh] md:max-h-none overflow-y-auto md:overflow-visible">
        
        {/* Close Controls - Absolute on Desktop, Sticky on Mobile */}
        <div className="absolute md:fixed top-4 left-4 z-20 flex gap-2 group opacity-80 md:opacity-50 hover:opacity-100 transition-opacity">
             <button onClick={onClose} className="w-4 h-4 md:w-3 md:h-3 rounded-full bg-[#777] md:bg-[#555] flex items-center justify-center"></button>
             <div className="w-3 h-3 rounded-full bg-[#555] hidden md:block"></div>
             <div className="w-3 h-3 rounded-full bg-[#555] hidden md:block"></div>
        </div>

        {/* Left: Video Area */}
        <div className="w-full md:w-2/3 bg-black flex items-center justify-center relative group shrink-0">
         <iframe
  src={artwork.previewVideoUrl} // 혹은 artwork.videoUrl (데이터에 따라 맞춤)
  className="w-full h-full aspect-video"
  title="YouTube video player"
  frameBorder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen
/>
        </div>

        {/* Right: Info Area (Sidebar Style) */}
        <div className="w-full md:w-1/3 border-t md:border-t-0 md:border-l border-white/10 bg-[#161616]/50 flex flex-col h-full">
           
           <div className="p-5 md:p-8 flex-1 overflow-y-auto">
             <div className="mt-2 md:mt-8 mb-4 md:mb-6">
                <div className="flex justify-between items-start">
                    <h2 className="text-xl md:text-3xl font-bold text-white tracking-tight leading-tight">{artwork.title}</h2>
                    {/* Like Button */}
                    <button 
                      onClick={() => onToggleLike(artwork.id)}
                      className="text-white hover:scale-110 transition-transform p-2 md:p-0"
                    >
                      <svg className={`w-6 h-6 ${isLiked ? 'fill-white' : 'fill-none'}`} stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </button>
                </div>
                <div className="flex items-center gap-2 mt-2">
                    <span className="w-2 h-2 rounded-full bg-white"></span>
                    <span className="text-neutral-400 font-medium text-sm">{artwork.artist}</span>
                </div>
             </div>

             <div className="space-y-4 md:space-y-6">
                <div className="bg-white/5 rounded-lg p-4 border border-white/5">
                    <p className="text-neutral-400 text-sm leading-relaxed font-light">
                        {artwork.description}
                    </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
    <div className="bg-white/5 rounded-lg p-3 border border-white/5">
        <span className="block text-[10px] text-neutral-500 uppercase tracking-wider mb-1">Format</span>
        {/* ❌ 'MP4 / 4K' 대신 'artwork.format'을 사용합니다. */}
        <span className="text-xs md:text-sm text-white font-mono">{artwork.format}</span>
    </div>
    <div className="bg-white/5 rounded-lg p-3 border border-white/5">
        <span className="block text-[10px] text-neutral-500 uppercase tracking-wider mb-1">Duration</span>
        <span className="text-xs md:text-sm text-white font-mono">{artwork.duration}</span>
    </div>
</div>
             </div>
           </div>

           {/* Donation / Download Logic */}
           <div className="p-5 md:p-6 border-t border-white/10 bg-white/5 pb-8 md:pb-6">
             
             {/* IDLE STATE: Donate Button */}
             {donationStatus === 'idle' && (
               <div className="flex flex-col gap-3">
                 <div className="flex items-center justify-between">
                     <span className="text-neutral-500 text-xs">Support the artist to download</span>
                 </div>
                 <button 
                    onClick={() => setDonationStatus('payment')}
                    className="w-full py-3 bg-white hover:bg-neutral-200 active:scale-[0.98] text-black font-bold rounded-lg transition-all shadow-lg text-sm flex items-center justify-center gap-2"
                 >
                    <span>Donate & Download</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                 </button>
               </div>
             )}

             {/* PAYMENT STATE: Virtual Account Info */}
             {donationStatus === 'payment' && (
               <div className="flex flex-col gap-4 animate-in fade-in slide-in-from-bottom-2 duration-300">
                  <div className="bg-black/30 p-3 rounded-md border border-white/10 space-y-2">
                     <p className="text-xs text-neutral-400 uppercase tracking-widest">Virtual Account</p>
                     <div className="flex justify-between text-sm text-white">
                        <span>Bank</span>
                        {/* ❌ 고정값 대신 artwork.bankName을 사용 */}
                        <span className="font-mono">{artwork.bankName}</span> 
                     </div>
                     <div className="flex justify-between text-sm text-white">
                        <span>Account</span>
                        {/* ❌ 고정값 대신 artwork.accountNumber를 사용 */}
                        <span className="font-mono select-all">{artwork.accountNumber}</span> 
                     </div>
                     <div className="flex justify-between text-sm text-white">
                        <span>Holder</span>
                        {/* 작가 이름이 예금주로 표시됨 */}
                        <span>{artwork.artist}</span> 
                     </div>
                  </div>
                  <button 
                    onClick={() => setDonationStatus('completed')}
                    className="w-full py-3 bg-white hover:bg-neutral-200 active:scale-[0.98] text-black font-bold rounded-lg transition-all shadow-lg text-sm"
                  >
                    I have sent the money
                  </button>
                  <button 
                    onClick={() => setDonationStatus('idle')}
                    className="text-xs text-neutral-500 hover:text-white transition-colors text-center py-2"
                  >
                    Cancel
                  </button>
               </div>
             )}

             {/* COMPLETED STATE: Download Button */}
             {donationStatus === 'completed' && (
               <div className="flex flex-col gap-3 animate-in fade-in slide-in-from-bottom-2 duration-300">
                  <div className="flex items-center justify-center gap-2 text-green-400 mb-1">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                      <span className="text-sm font-medium">Thank you for your support!</span>
                  </div>
                  <button 
                    onClick={handleDownload}
                    className="w-full py-3 bg-white hover:bg-neutral-200 active:scale-[0.98] text-black font-bold rounded-lg transition-all shadow-lg text-sm flex items-center justify-center gap-2"
                  >
                    <span>Download Full Video</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                  </button>
               </div>
             )}

           </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;