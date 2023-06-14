import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import * as api from '../components/api';
import { useSearchParams } from 'react-router-dom';

export const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');
  const [inputValue, setInputValue] = useState(query || '');
  const [dataSearch, setDataSearch] = useState([]);
  const location = useLocation();

  const handleChange = event => {
    const value = event.target.value;
    setInputValue(value);

    // setSearchParams({ query: value });
  };

  // const getMovie = useCallback(() => {
  //   api
  //     .getSearchMovies(query)
  //     .then(data => setDataSearch(data.data.results))
  //     .catch(e => alert(e));
  // }, [query]);

  const handleSubmit = event => {
    event.preventDefault();
    setSearchParams({ query: inputValue });
    // query && getMovie();
  };

  useEffect(() => {
    const getMovie = () => {
      api
        .getSearchMovies(query)
        .then(data => setDataSearch(data.data.results))
        .catch(e => alert(e));
    };
    query && getMovie();
  }, [query]);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input value={inputValue} onChange={handleChange} type="text" />
        <button>Search</button>
      </form>

      <ul>
        {dataSearch.map(el => (
          <li style={{ margin: '10px', display: 'flex' }} key={el.id}>
            <Link
              style={{ textDecoration: 'none', color: 'black' }}
              to={`/movies/${el.id}`}
              state={location}
            >
              <img
                width={100}
                src={
                  el.poster_path
                    ? `https://image.tmdb.org/t/p/w500${el.poster_path}`
                    : 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'
                }
                alt=""
              />
            </Link>
            <Link
              style={{ textDecoration: 'none', color: 'black' }}
              to={`/movies/${el.id}`}
              state={location}
            >
              {el.title}
              <br />
              {el.release_date}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

// export default Movies;
