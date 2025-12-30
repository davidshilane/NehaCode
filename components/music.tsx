'use client';

import { MusicIcon, Play, Pause, SkipBack, SkipForward } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

const PLAYLIST = [
  { title: "Aa Jao Meri Tamanna", artist: "Ajab Prem Ki Ghazab Kahani", src: "/Aa Jao Meri Tamanna.mp3" },
  { title: "Bargad", artist: "Arpit Bala", src: "/bargad.mp3" },
  { title: "Be Intehaan", artist: "Race 2", src: "/be intehaan.mp3" },
  { title: "Dhokha Dhadi", artist: "R... Rajkumar", src: "/Dhokha Dhadi.mp3" },
  { title: "Dil Ibaadat", artist: "Tum Mile", src: "/Dil Ibaadat.mp3" },
  { title: "Ik Kudi", artist: "Arpit Bala", src: "/Ik Kudi.mp3" },
  { title: "Kinna Sona", artist: "Bhaag Johnny", src: "/kinna sona.mp3" },
  { title: "Maahi", artist: "Raaz 2", src: "/Maahi.mp3" },
  { title: "Mere Bina", artist: "Crook", src: "/Mere Bina.mp3" },
  { title: "Raabta", artist: "Agent Vinod", src: "/Raabta.mp3" },
  { title: "Rakhlo Tum Chupaake", artist: "Arpit Bala", src: "/Rakhlo Tum Chupaake.mp3" },
  { title: "Tere leye", artist: "Prince", src: "/Tere leye.mp3" },
  { title: "Tu Jaane Na", artist: "Ajab Prem Ki Ghazab Kahani", src: "/Tu Jaane Na.mp3" },
  { title: "Tum Se Hi", artist: "Jab We Met", src: "/tum se hi.mp3" }
];

export default function Music() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef(null);

  const currentSong = PLAYLIST[currentIndex];

  // Format time in seconds to MM:SS
  const formatTime = (time) => {
    if (isNaN(time)) return "0:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  // Update progress as song plays
  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  // Set duration when metadata loads
  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  };

  // Seek song when slider is moved
  const handleSliderChange = (e) => {
    const time = parseFloat(e.target.value);
    setCurrentTime(time);
    if (audioRef.current) {
      audioRef.current.currentTime = time;
    }
  };

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(err => console.error("Playback failed:", err));
    }
    setIsPlaying(!isPlaying);
  };

  const changeSong = (index) => {
    const newIndex = (index + PLAYLIST.length) % PLAYLIST.length;
    setCurrentIndex(newIndex);
    setIsPlaying(true);
  };

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.load();
      if (isPlaying) {
        audioRef.current.play().catch(() => console.log("Interaction required"));
      }
    }
  }, [currentIndex]);

  return (
    <section className="py-12 px-4 bg-gray-50 min-h-screen font-sans">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-900" style={{ fontFamily: 'Playfair Display, serif' }}>
          🩷 Music For Us 🩷
        </h2>

        {/* Updated Audio Engine with Listeners */}
        <audio 
          ref={audioRef} 
          src={currentSong.src} 
          onTimeUpdate={handleTimeUpdate}
          onLoadedMetadata={handleLoadedMetadata}
          onEnded={() => changeSong(currentIndex + 1)} 
        />

        <div className="bg-white shadow-2xl rounded-3xl overflow-hidden border border-pink-50">
          
          <div className="relative h-auto flex flex-col items-center justify-center overflow-hidden py-12">
            <div 
              className="absolute inset-0 bg-cover bg-center transition-all duration-700"
              style={{ 
                backgroundImage: `url('/IMG_6141.JPG')`,
                filter: 'brightness(0.6)' 
              }}
            />
            <div className="absolute inset-0 bg-black/20 backdrop-blur-[3px]" />

            <div className="relative z-10 flex flex-col items-center text-center px-6 w-full">
              <div className={`bg-pink-500/90 w-24 h-24 rounded-full flex items-center justify-center mb-4 shadow-2xl transition-transform duration-1000 ${isPlaying ? 'rotate-180 scale-105' : ''}`}>
                <MusicIcon size={40} className="text-white" />
              </div>

              <h3 className="text-xl font-bold text-white mb-1 drop-shadow-lg">{currentSong.title}</h3>
              <p className="text-pink-200 text-sm font-medium mb-6 drop-shadow-md">{currentSong.artist}</p>

              {/* --- PROGRESS SLIDER --- */}
              <div className="w-full max-w-md px-4 mb-6">
                <input
                  type="range"
                  min="0"
                  max={duration || 0}
                  value={currentTime}
                  onChange={handleSliderChange}
                  className="w-full h-1.5 bg-white/30 rounded-lg appearance-none cursor-pointer accent-pink-500"
                />
                <div className="flex justify-between text-[10px] text-white/80 mt-2 font-mono">
                  <span>{formatTime(currentTime)}</span>
                  <span>{formatTime(duration)}</span>
                </div>
              </div>

              {/* Controls */}
              <div className="flex items-center gap-8">
                <button onClick={() => changeSong(currentIndex - 1)} className="text-white/80 hover:text-white transition-all transform active:scale-90">
                  <SkipBack size={28} fill="currentColor" />
                </button>

                <button
                  onClick={togglePlay}
                  className="bg-white text-pink-500 hover:scale-110 w-14 h-14 rounded-full flex items-center justify-center transition-all shadow-xl active:scale-95"
                >
                  {isPlaying ? <Pause size={24} fill="currentColor" /> : <Play size={24} fill="currentColor" className="ml-1" />}
                </button>

                <button onClick={() => changeSong(currentIndex + 1)} className="text-white/80 hover:text-white transition-all transform active:scale-90">
                  <SkipForward size={28} fill="currentColor" />
                </button>
              </div>
            </div>
          </div>

          {/* Playlist Section */}
          <div className="p-4 bg-white">
            <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4 px-4">Select the song Baby</h4>
            <div className="max-h-64 overflow-y-auto custom-scrollbar">
              {PLAYLIST.map((song, index) => (
                <button
                  key={index}
                  onClick={() => changeSong(index)}
                  className={`w-full flex items-center justify-between p-4 rounded-2xl transition-all mb-1 ${
                    currentIndex === index ? 'bg-pink-50 text-pink-600 shadow-sm' : 'hover:bg-gray-50 text-gray-700'
                  }`}
                >
                  <div className="flex items-center gap-4 text-left">
                    <span className={`text-xs font-bold ${currentIndex === index ? 'text-pink-500' : 'text-gray-300'}`}>
                      {index + 1 < 10 ? `0${index + 1}` : index + 1}
                    </span>
                    <div>
                      <p className="text-sm font-semibold">{song.title}</p>
                      <p className="text-xs opacity-60">{song.artist}</p>
                    </div>
                  </div>
                  
                  {currentIndex === index && isPlaying && (
                    <div className="flex gap-1 items-end h-3">
                      <div className="w-1 bg-pink-500 animate-bounce" style={{ animationDuration: '0.6s' }}></div>
                      <div className="w-1 bg-pink-500 animate-bounce" style={{ animationDuration: '0.8s' }}></div>
                      <div className="w-1 bg-pink-500 animate-bounce" style={{ animationDuration: '0.5s' }}></div>
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}