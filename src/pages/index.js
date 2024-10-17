import Home from '@/components/home/Home';
import React, { useEffect, useRef, useState } from 'react';

const Index = () => {
  const [isPlay, setIsPlay] = useState(false);
  const audioRef = useRef(null)

  useEffect(() => {
    audioRef.current = new Audio('/water.mp3');

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
    };
  }, []);

  const handleAudio = () => {
    if (!isPlay) {
      audioRef.current.play();
      setIsPlay(true);
    } else {
      audioRef.current.pause();
      setIsPlay(false);
    }
  };

  return (
    <>
      <div
        onClick={handleAudio}
        className='w-10 h-10 fixed rounded-full border-2 border-zinc-500 bottom-8 cursor-pointer left-5 z-10 text-zinc-500 flex items-center justify-center'
      >
        <i className="ri-music-2-line"></i>
      </div>
      <Home />
    </>
  );
};

export default Index;
