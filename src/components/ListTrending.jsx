import { ListTrindingItem } from './ListTrindingItem';
import * as api from '../components/api';
import { useEffect } from 'react';
import { useState } from 'react';

export const ListTrending = () => {
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
    <ul>
      {apiMovies.map(el => (
        <ListTrindingItem
          key={el.id}
          itemId={el.id}
          title={el.original_title}
        />
      ))}
    </ul>
  );
};
