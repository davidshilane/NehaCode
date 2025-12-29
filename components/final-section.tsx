'use client';

import { Heart, X } from 'lucide-react';
import { useState } from 'react';
import confetti from 'canvas-confetti';

interface FinalSectionProps {
  onILoveYou?: () => void;
}

export default function FinalSection({ onILoveYou }: FinalSectionProps) {
  const [showVideo, setShowVideo] = useState(false);

  const handleSurprise = () => {
    // 1. Trigger Confetti Celebration
    const duration = 5 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 100 };

    const randomInRange = (min: number, max: number) => Math.random() * (max - min) + min;

    const interval: any = setInterval(function() {
      const timeLeft = animationEnd - Date.now();
      if (timeLeft <= 0) return clearInterval(interval);

      const particleCount = 50 * (timeLeft / duration);
      confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } });
      confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } });
    }, 250);

    // 2. Open Video Modal
    setShowVideo(true);
    if (onILoveYou) onILoveYou();
  };

  return (
    <section className="relative py-32 px-4 bg-gradient-to-b from-pink-500 to-pink-600 text-white overflow-hidden">
      {/* Background Floating Hearts */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <Heart className="absolute top-10 left-10 animate-bounce text-pink-200" size={40} />
        <Heart className="absolute bottom-20 right-1/4 animate-pulse text-pink-100" size={60} />
      </div>

      <div className="max-w-3xl mx-auto text-center relative z-10">
        <div className="mb-6 text-pink-100 tracking-widest text-sm font-bold uppercase">
          ✨ CELEBRATING US ✨
        </div>

        <h2 className="text-6xl md:text-8xl font-bold mb-8 drop-shadow-lg" style={{fontFamily: 'Playfair Display, serif'}}>
          Forever & Always
        </h2>

        <p className="text-xl md:text-2xl mb-12 text-pink-50 font-light leading-relaxed">
          Thank you for being the most incredible part of my life. <br />
          Here's to endless love and new adventures together.
        </p>

        <button
          onClick={handleSurprise}
          className="group bg-white text-pink-600 hover:bg-pink-50 px-12 py-5 rounded-full font-bold text-xl flex items-center gap-3 mx-auto transition-all transform hover:scale-110 shadow-xl"
        >
          <Heart size={28} className="group-hover:fill-pink-600 transition-all" />
          Click for a Surprise
          <Heart size={28} className="group-hover:fill-pink-600 transition-all" />
        </button>
      </div>

      {/* --- PORTRAIT VIDEO MODAL --- */}
      {showVideo && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-xl p-4 transition-all duration-500">
          {/* Portrait Container: Max-width 400px and 9:16 Aspect Ratio */}
          <div className="relative w-full max-w-[400px] aspect-[9/16] rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(236,72,153,0.4)] border border-white/10 bg-black">
            
            {/* Close Button */}
            <button 
              onClick={() => setShowVideo(false)}
              className="absolute top-4 right-4 z-[110] bg-black/40 hover:bg-pink-500 text-white p-2 rounded-full transition-all"
            >
              <X size={20} />
            </button>

            {/* Video Player set to cover the portrait area */}
            <video 
              autoPlay 
              controls 
              className="w-full h-full object-cover"
              src="/New Year Video.mp4" 
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}
    </section>
  );
}