import React from 'react';
import { ListTrindingItem } from './ListTrindingItem';

export const ListTrending = ({ apiMovies, openDetails }) => {
  return (
    <ul>
      {apiMovies.map(el => (
        <ListTrindingItem
          key={el.id}
          openDetails={openDetails}
          itemId={el.id}
          title={el.original_title}
        />
      ))}
    </ul>
  );
};
