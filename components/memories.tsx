'use client';

import { useState } from 'react';

export default function Memories() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const memories = [
    { src: '/first.jpg', alt: 'Our first pic' },
    { src: '/IMG_6494.jpg', alt: 'That magical eye contact' },
    { src: '/IMG_5076.jpg', alt: 'Love in ice cream cafe' },
    { src: '/hot.jpg', alt: 'My Hottest Girl' },
    { src: '/cute.jpg', alt: 'My Cutest Girl' },
    { src: '/IMG_6566.jpg', alt: 'My My Mine Simple' },
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="mb-4 text-pink-500 tracking-wider text-xl font-semibold text-center">
          <span className="text-2xl">📸</span> OUR JOURNEY
        </div>

        <h2 className="text-5xl md:text-6xl font-bold text-center mb-4 text-gray-900" style={{fontFamily: 'Playfair Display, serif'}}>
          Beautiful Memories
        </h2>

        <p className="text-center text-gray-600 mb-16 text-sm">
          Every photo tells a story of our love, laughter, and the beautiful moments we've shared
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {memories.map((memory, index) => (
            <div
              key={index}
              className="relative h-80 rounded-2xl overflow-hidden cursor-pointer group"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <img
                src={memory.src || "/placeholder.svg"}
                alt={memory.alt}
                className={`w-full h-full object-cover transition-all duration-500 ${
                  hoveredIndex === index ? 'scale-110 brightness-75' : 'scale-100'
                }`}
              />

              <div
                className={`absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center transition-opacity duration-500 ${
                  hoveredIndex === index ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <div className="text-white text-center">
                  <div className="text-6xl mb-3">💕</div>
                  <p className="text-lg font-semibold">{memory.alt}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}