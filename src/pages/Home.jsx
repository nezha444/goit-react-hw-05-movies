import React from 'react';
import { ListTrending } from '../components/ListTrending';

const Home = () => {
  return (
    <header>
      <h2>Trending today</h2>
      <ListTrending />
    </header>
  );
};

export default Home;