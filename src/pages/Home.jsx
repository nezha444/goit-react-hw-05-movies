import React from 'react';
import { ListTrending } from '../components/ListTrending';
import * as api from '../components/api';
import { useEffect } from 'react';
import { useState } from 'react';

export const Home = () => {
  const [apiMovies, setApiMovies] = useState([]);

  useEffect(() => {
    api
      .getTrendingMovies()
      .then(data => {
        setApiMovies(data.data.results);
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <header>
      <h2>Trending today</h2>
      <ListTrending apiMovies={apiMovies} />
    </header>
  );
};

// export default Home;
