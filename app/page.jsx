'use client';
import Billboard from '@/components/billboard';
import MovieList from '@/components/movie-list';
import Navbar from '@/components/navbar';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Home() {
  const [data, setData] = useState([]);
  const [random, setRandom] = useState(Math.floor(Math.random() * 4));
  const [loading, setIsLoading] = useState(false);

  useEffect(() => {
    getMovieList();
  }, [loading]);

  async function getMovieList() {
    const movies = await axios.get('/api/random');
    setData(movies.data);
    setIsLoading(true);
  }

  if (!loading) {
    return null;
  }
  return (
    <>
      <Navbar />
      <Billboard movie={data[random]} />
      <div className="pb-40">
        <MovieList title="Trending Now" data={data} />
      </div>
    </>
  );
}
