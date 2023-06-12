import React, { useEffect, useState } from 'react';
import * as api from '../components/api';
import { useParams } from 'react-router-dom';

export const Cast = () => {
  const [cast, setCast] = useState('');
  const { movieId } = useParams();
  // console.log(cast);

  useEffect(() => {
    api
      .getCreditsMovies(movieId)
      .then(data => {
        setCast(data.data.cast);
      })
      .catch(e => console.log(e));
    // console.log(movieId);
  }, [movieId]);

  return (
    <ul>
      {cast &&
        cast.map(el => (
          <li
            key={el.id}
            style={{
              border: 'solid',
              listStyle: 'none',
              padding: '10px',
              margin: '10px',
              display: 'inline-block',
              width: '250px',
              height: '250px',
            }}
          >
            <img
              width={100}
              src={
                el.profile_path
                  ? `https://image.tmdb.org/t/p/w500${el.profile_path}`
                  : 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'
              }
              alt=""
            />
            <h3>{el.name}</h3>
            <p>Character: {el.character}</p>
          </li>
        ))}
    </ul>
  );
};
