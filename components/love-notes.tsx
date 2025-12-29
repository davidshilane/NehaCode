'use client';

import { Mail } from 'lucide-react';

const notes = [
  { title: 'Why I Love You', id: 1, content: 'You are the reason my heart smiles every single day. Your kindness, strength, and beautiful spirit make me fall in love with you more each day. Thank you for being exactly who you are.' },
  { title: 'My Promise', id: 2, content: 'I promise to always be by your side through every moment - the joyful celebrations and the challenging days. You are my greatest blessing, and I dedicate my heart to you forever.' },
  { title: 'What You Mean to Me', id: 3, content: 'You are my home, my comfort, my greatest adventure, and my truest love. With you, I have found the meaning of true partnership and unconditional love.' },
  { title: 'Our Future', id: 4, content: 'I see a lifetime of beautiful moments with you. Traveling together, building memories, growing old hand in hand. You are my forever person, and I cannot wait for our journey ahead.' },
  { title: 'Thank You', id: 5, content: 'Thank you for choosing me, for believing in us, and for loving me with such devotion. You have changed my life in the most beautiful ways, and I am forever grateful.' },
  { title: 'New Year Wish', id: 6, content: 'My wish for this year is to fill it with more laughter, more adventures, and endless moments that remind us why we are so deeply in love. Here\'s to us - forever and always.' },
];

interface LoveNotesProps {
  onSelectLetter: (id: number) => void;
}

export default function LoveNotes({ onSelectLetter }: LoveNotesProps) {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="mb-4 text-pink-500 tracking-wider text-xl font-semibold text-center">
          <span className="text-2xl">💌</span> JUST FOR YOU
        </div>

        <h2 className="text-5xl md:text-6xl font-bold text-center mb-4 text-gray-900" style={{fontFamily: 'Playfair Display, serif'}}>
          Love Notes
        </h2>

        <p className="text-center text-gray-600 mb-16 text-sm">
          Click each envelope to read a special message written just for you
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {notes.map((note) => (
            <div
              key={note.id}
              className="bg-pink-100 rounded-2xl p-8 text-center hover:shadow-xl transition-all transform hover:-translate-y-2 cursor-pointer"
              onClick={() => onSelectLetter(note.id)}
            >
              <div className="bg-pink-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Mail size={40} className="text-white" />
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-4">{note.title}</h3>

              <button className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-2 rounded-full font-semibold text-sm transition-all">
                Open Letter
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
