'use client';

import { useState, useRef, useEffect } from 'react';
import Hero from '@/components/hero';
import LoveNotes from '@/components/love-notes';
import Timeline from '@/components/timeline';
import Memories from '@/components/memories';
import Music from '@/components/music';
import FinalSection from '@/components/final-section';
import LetterModal from '@/components/letter-modal';
import { useSound } from '@/hooks/use-sound';

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [selectedLetter, setSelectedLetter] = useState<number | null>(null);
  const { playSound } = useSound();

  const createHearts = () => {
    playSound();
    
    if (!containerRef.current) return;

    const colors = ['#ec4899', '#f472b6', '#fbcfe8', '#fce7f3'];
    const heartCount = 50;

    for (let i = 0; i < heartCount; i++) {
      const heart = document.createElement('div');
      heart.className = 'fixed text-3xl pointer-events-none';
      heart.textContent = '♥';
      heart.style.color = colors[Math.floor(Math.random() * colors.length)];
      
      heart.style.left = Math.random() * window.innerWidth + 'px';
      heart.style.top = Math.random() * window.innerHeight + 'px';
      
      heart.style.animation = `float ${2 + Math.random() * 2}s ease-out forwards`;
      heart.style.opacity = '1';

      containerRef.current?.appendChild(heart);

      setTimeout(() => {
        heart.remove();
      }, 4000);
    }
  };

  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes float {
        0% {
          transform: translateY(0) translateX(0) scale(1);
          opacity: 1;
        }
        100% {
          transform: translateY(-${window.innerHeight + 100}px) translateX(${(Math.random() - 0.5) * 300}px) scale(0.3);
          opacity: 0;
        }
      }
    `;
    document.head.appendChild(style);
  }, []);

  return (
    <>
      <div ref={containerRef} className="relative min-h-screen">
        <Music />
        <Hero onSendLove={createHearts} />
        <LoveNotes onSelectLetter={setSelectedLetter} />
        <Timeline />
        <Memories />
        <FinalSection onILoveYou={createHearts} />
      </div>
      
      {selectedLetter !== null && (
        <LetterModal 
          letterId={selectedLetter} 
          onClose={() => setSelectedLetter(null)}
          onHearts={createHearts}
        />
      )}
    </>
  );
}
