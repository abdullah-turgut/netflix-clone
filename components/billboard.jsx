'use client';

import axios from 'axios';
import { Info } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Billboard({ movie }) {
  return (
    <div className="relative h-[56vw] lg:h-screen">
      <video
        src={movie.videoUrl}
        poster={movie.thumbnailUrl}
        autoPlay
        muted
        loop
        className="brightness-75 w-full h-[56vw] lg:h-screen object-cover bg-center"
      ></video>
      <div className="absolute top-[30%] md:top-[40%] ml-4 md:ml-16">
        <p className="text-white text-xl md:text-5xl h-full w-[50%] lg:text-6xl font-bold drop-shadow-xl">
          {movie.title}
        </p>
        <p className="text-white text-xs md:text-lg mt-3 md:mt-8 w-[90%] md:w-[80%] lg:w-[50%] drop-shadow-xl ">
          {movie.description}
        </p>
        <div className="flex flex-row items-center mt-3 md:mt-4 gap-3">
          <button
            className="
          bg-white text-white bg-opacity-30 rounded-md py-1 md:py-2 px-2 md:px-4 w-auto text-xs lg:text-lg font-semibold flex flex-row items-center hover:bg-opacity-20 transition"
          >
            <Info className="mr-2" size={20} />
            More Info
          </button>
        </div>
      </div>
    </div>
  );
}
