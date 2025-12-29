'use client';

import { Heart } from 'lucide-react';

interface HeroProps {
  onSendLove: () => void;
}

export default function Hero({ onSendLove }: HeroProps) {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 py-20 text-center">
      <div className="mb-6 text-pink-500 tracking-wider text-xl font-semibold">
        <span className="text-2xl">🩷</span> CELEBRATING US <span className="text-2xl">🩷</span>
      </div>
      
      <h1 className="text-6xl md:text-7xl font-bold mb-4 text-gray-900" style={{fontFamily: 'Playfair Display, serif'}}>
        Happy New Year
      </h1>
      
      <h1 className="text-6xl md:text-7xl font-bold mb-6 text-gray-900" style={{fontFamily: 'Playfair Display, serif'}}>
        2026
      </h1>

      <div className="text-xl md:text-2xl font-bold text-pink-600 mb-8">
        My Girl
      </div>

      <p className="max-w-2xl text-base text-gray-600 mb-12 leading-relaxed">
        A new year begins, and my heart whispers your name.
Every dream I carry has you in it.
If I have you, I have everything.
          <span className="block text-xl font-semibold mt-4 text-pink-600">
    Happy New Year, My Love
  </span>
      </p>

      <div className="flex gap-6 flex-wrap justify-center">
        <button
          onClick={onSendLove}
          className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-3 rounded-full font-semibold flex items-center gap-2 transition-all transform hover:scale-105"
        >
          <Heart size={20} fill="white" />
          Send Love
        </button>
      </div>
    </section>
  );
}
