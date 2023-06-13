import React from 'react';
import { Link } from 'react-router-dom';

export const ListTrindingItem = ({ itemId, title }) => {
  return (
    <li key={itemId}>
      <Link to={`/movies/${itemId}`}>{title}</Link>
    </li>
  );
};
