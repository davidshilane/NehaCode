'use client';

import { Heart, X } from 'lucide-react';
import { useState } from 'react';
import confetti from 'canvas-confetti';

// 1. Define static data for background hearts to avoid hydration errors
// (Positions, sizes, and animation delays are pre-defined here)
const floatingHearts = Array.from({ length: 20 }).map((_, i) => ({
  id: i,
  // Random-looking positions between 5% and 95%
  top: `${(i * 7 + 5) % 90}%`,
  left: `${(i * 13 + 2) % 95}%`,
  // Varying sizes between 20px and 50px
  size: 20 + (i % 5) * 8,
  // Varying animation delays for natural look
  delay: `${(i % 3) * 0.7}s`,
  // Alternating colors for depth (lighter pinks)
  color: i % 2 === 0 ? 'text-pink-200/40' : 'text-pink-300/30',
  // Varying animations
  animation: i % 3 === 0 ? 'animate-bounce' : 'animate-pulse',
}));


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
    // Added 'overflow-hidden' to ensure hearts stay inside this pink section
    <section className="relative py-32 px-4 bg-gradient-to-b from-pink-500 to-pink-600 text-white overflow-hidden">
      
      {/* --- NEW BACKGROUND: MANY GLOWING HEARTS --- */}
      <div className="absolute inset-0 pointer-events-none">
        {floatingHearts.map((heart) => (
          <Heart
            key={heart.id}
            size={heart.size}
            className={`absolute ${heart.color} ${heart.animation} 
              // This drop-shadow creates the "glowing" effect
              drop-shadow-[0_0_8px_rgba(255,200,220,0.6)]
            `}
            style={{
              top: heart.top,
              left: heart.left,
              animationDelay: heart.delay,
              animationDuration: '4s', // Slower, smoother animation
            }}
            // Fill some hearts, leave others as outlines for texture
            fill={heart.id % 3 === 0 ? "currentColor" : "none"}
          />
        ))}
      </div>

      <div className="max-w-xl mx-auto text-center relative z-10">
        <div className="mb-6 text-pink-100 tracking-widest text-xl font-bold uppercase drop-shadow-sm">
          ✨ CELEBRATING US ✨
        </div>

        <h2 className="text-6xl md:text-8xl font-bold mb-8 drop-shadow-xl" style={{fontFamily: 'Playfair Display, serif'}}>
          Forever & Always
        </h2>

        <p className="text-xl md:text-2xl mb-12 text-pink-50 font-light leading-relaxed drop-shadow">
          Thank you for being the most incredible part of my life. <br />
          Here's to endless love and new adventures together.
        </p>

        <button
          onClick={handleSurprise}
          className="group bg-white text-pink-600 hover:bg-pink-50 px-12 py-5 rounded-full font-bold text-xl flex items-center gap-3 mx-auto transition-all transform hover:scale-110 shadow-[0_0_30px_rgba(255,255,255,0.5)]"
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