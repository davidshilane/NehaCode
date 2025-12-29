'use client';

import { Playfair_Display } from 'next/font/google';

const playfairDisplay = Playfair_Display({ subsets: ['latin'] });

export default function Timeline() {
  const events = [
    { month: 'Jan', title: 'New Beginnings', description: 'God was planning our moments in this month and was planning to plan a meeting for us😘' },
    { month: 'Apr', title: 'Spring Blossoms', description: 'Just like the sunglight on the flowers how they glow I glowed up when I met you for the first time 😍' },
    { month: 'Jul', title: 'Summer Adventures', description: 'Our Adventure umm risk hote hue bhi milna 😂 risk hote hue bhi tere ghr k pass hug kr k bye bolna hehehe...aur ab hoga ki hug ke saath saath public m ek hand kiss ya fir forehead kiss🫂.' },
    { month: 'Oct', title: 'Autumn Magic', description: 'The magic you did on me like uff😩...mera lover boy era wapis aaya merko wapis mn kiya pyaar krne ka wapis se try dene ka...I am bounded in your beauty and I am locked in for you' },
    { month: 'Dec', title: 'Year\'s End', description: '15 dec k baad jitne bhi din gye wo 15 dec hamesha mere dimag m rheti h hamesha sochta rheta hu....aur ab ye new year aa gaya with the best girl of the world jo ki meri h 😭😭' },
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-pink-50 via-white to-pink-100">
      <div className="max-w-4xl mx-auto">
        <div className="mb-4 text-pink-500 tracking-widest text-xl font-semibold text-center">
          <span className="text-xl">📅</span> YEAR IN REVIEW
        </div>

        <h2 className={`text-5xl md:text-6xl font-bold text-center mb-4 text-gray-900 ${playfairDisplay.className}`}>
          Our Story in 2025
        </h2>

        <p className="text-center text-gray-600 mb-16 text-sm">
          Month by month, moment by moment, our love grew stronger
        </p>

        <div className="relative">
          {/* Vertical line down the center */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-pink-300 to-pink-400"></div>

          <div className="space-y-12">
            {events.map((event, index) => (
              <div key={index} className="relative">
                {index % 2 === 0 ? (
                  // Left side
                  <div className="flex justify-end pr-8">
                    <div className="w-5/12 bg-white rounded-2xl p-8 shadow-lg border border-pink-100">
                      <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">{event.title}</h3>
                      <p className="text-gray-600 text-center text-sm">{event.description}</p>
                    </div>
                    {/* Month badge on center line */}
                    <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                      <div className="bg-pink-500 w-20 h-20 rounded-full flex items-center justify-center border-4 border-pink-100 shadow-lg">
                        <span className="text-white font-bold text-lg text-center">{event.month}</span>
                      </div>
                    </div>
                  </div>
                ) : (
                  // Right side
                  <div className="flex justify-start pl-8">
                    <div className="w-5/12 bg-white rounded-2xl p-8 shadow-lg border border-pink-100">
                      <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">{event.title}</h3>
                      <p className="text-gray-600 text-center text-sm">{event.description}</p>
                    </div>
                    {/* Month badge on center line */}
                    <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                      <div className="bg-pink-500 w-20 h-20 rounded-full flex items-center justify-center border-4 border-pink-100 shadow-lg">
                        <span className="text-white font-bold text-lg text-center">{event.month}</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
