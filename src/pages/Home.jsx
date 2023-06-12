import React from 'react';
import { ListTrending } from '../components/ListTrending';

export const Home = ({ apiMovies, openDetails }) => {
  return (
    <header>
      <h2>Trending today</h2>
      <ListTrending openDetails={openDetails} apiMovies={apiMovies} />
    </header>
  );
};
