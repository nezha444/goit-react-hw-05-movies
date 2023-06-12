import React from 'react';
import { Link } from 'react-router-dom';

export const ListTrindingItem = ({ itemId, title, openDetails }) => {
  return (
    <li key={itemId}>
      <Link
        onClick={() => {
          openDetails(itemId);
          console.log(itemId);
        }}
        to={`/movies/${itemId}`}
      >
        {title}
      </Link>
    </li>
  );
};
