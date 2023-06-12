import { Routes, Route, Navigate } from 'react-router-dom';
import { Home } from '../pages/Home';
import { Movies } from '../pages/Movies';
import { Header } from '../pages/Header';
import { MovieDetails } from 'pages/MovieDetails';
import { useEffect, useState } from 'react';
import * as api from './api.js';
import { Cast } from '../pages/Cast';
import { Reviews } from 'pages/Reviews';

export const App = () => {
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
    <>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home apiMovies={apiMovies} />} />
          <Route path="movies" element={<Movies />} />

          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};
