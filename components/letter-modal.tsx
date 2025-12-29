'use client';

import { X, Heart } from 'lucide-react';

const letters: { [key: number]: { title: string; content: string } } = {
  1: { title: 'Why I Love You', content: 'Tu hi h wo ldki jo mera spark wapis laayi mera lover boy era wapis aaya sirf tere leye (in both ways🫢) tu hi h jo mere face pr hamesha smile rkhti h. Tu hi h jo merko aur jada motivate krti h meri studies k leye just thinking about you I get motivated more. ' },
  2: { title: 'My Promise', content: 'My Promises to you....I will always be with you, holding your hand🙂‍↕️, kissing your body😚, grabbing your thighs🌝, annoying you timely🤭, and still treating you like a queen🙇🏻‍♂️.' },
  3: { title: 'What You Mean to Me', content: 'You are my home, my comfort, my greatest adventure(krenge adventure bhi), and my truest love (not the first but definitely the last and best). With you, I have found the meaning of true partnership and unconditional love.' },
  4: { title: 'Our Future', content: 'One day we are getting married😭😭, living the whole life together manifesting this hopefully one day this will be US the actual US what we always wanted 🥹' },
  5: { title: 'Thank You', content: 'Thank you so much for giving me a chance....or i would say that i took the chance😏😂...seriously thank you for coming into my life. Thank you for understanding me everytime. Thank you for being MY GIRL...MY PRECIOUS GIRL' },
  6: { title: 'New Year Wish', content: 'Umm so my new year wish is to live with you....have fun with you (and ofc both ways🤭) and and loving you moree and moree making you feel the happiest and the luckiest girl alive' },
};

interface LetterModalProps {
  letterId: number;
  onClose: () => void;
  onHearts: () => void;
}

export default function LetterModal({ letterId, onClose, onHearts }: LetterModalProps) {
  const letter = letters[letterId];

  if (!letter) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[80vh] overflow-y-auto shadow-2xl">
        <div className="bg-gradient-to-r from-pink-500 to-pink-600 p-8 text-white sticky top-0 flex justify-between items-center">
          <h2 className="text-3xl font-bold">{letter.title}</h2>
          <button 
            onClick={onClose}
            className="hover:bg-pink-700 p-2 rounded-full transition-all"
          >
            <X size={28} />
          </button>
        </div>

        {/* Added flex flex-col items-center here to center everything */}
        <div className="p-8 flex flex-col items-center">
          <p className="text-lg text-gray-700 leading-relaxed mb-4 text-center">
            {letter.content}
          </p>

          <div className="mt-8 flex flex-col items-center justify-center border-t border-pink-100 pt-6 w-full">
            <span className="text-pink-600 font-bold text-2xl tracking-widest uppercase flex items-center gap-2">
              <Heart className="fill-pink-600" size={20} />
              I LOVE YOU
              <Heart className="fill-pink-600" size={20} />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}