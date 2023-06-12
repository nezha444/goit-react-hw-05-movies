import React, { useEffect, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import * as api from '../components/api';
export const MovieDetails = () => {
  const { movieId } = useParams();

  const [oneMovie, setOneMovie] = useState('');

  const openDetails = movieId => {
    const movie = api.getDetailsMovies(movieId);
    movie
      .then(data => {
        setOneMovie(data.data);
      })
      .catch(error => console.log(error));
  };
  useEffect(() => {
    openDetails(movieId);
  }, [movieId]);

  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  return (
    <div>
      <Link onClick={goBack}>Go back</Link>
      <div key={oneMovie.id}>
        <img
          width={250}
          src={`https://image.tmdb.org/t/p/w500${oneMovie.poster_path}`}
          alt="Movie Poster"
        />
        <h1>
          <Link
            target="_blank"
            style={{ textDecoration: `none` }}
            to={oneMovie.homepage}
          >
            {oneMovie.title}
          </Link>
        </h1>
        {oneMovie && oneMovie.vote_average && (
          <p>Ratings: {String(oneMovie.vote_average).slice(0, 3)}</p>
        )}
        <p>Overview</p>
        <p>{oneMovie.overview}</p>
        <p>Genres</p>
        {oneMovie.genres &&
          oneMovie.genres.map((el, index) => (
            <span key={el.id}>
              {el.name}
              {index !== oneMovie.genres.length - 1 && ', '}
            </span>
          ))}
      </div>
      <div>
        <Link to="cast">Cast</Link>
        <br />
        <Link to="reviews">Reviews</Link>
      </div>
      <Outlet />
    </div>
  );
};
