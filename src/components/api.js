import axios from 'axios';
// Тренды
export const getTrendingMovies = async () => {
  const data = await axios.get(
    `https://api.themoviedb.org/3/trending/movie/day?api_key=2105b7aaa5e5e75ccc7797a3d78c360e&access_token=eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMTA1YjdhYWE1ZTVlNzVjY2M3Nzk3YTNkNzhjMzYwZSIsInN1YiI6IjY0ODQ0ZGZkZDJiMjA5MDBjYTFmMGNhZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9I-Q5JNBmL7uanr9Yy2cXFJKfT8QdxGP3W3Xd1CZ0XA`
  );
  return data;
};
// Поиск
export const getSearchMovies = async query => {
  const data = await axios.get(
    `https://api.themoviedb.org/3/search/movie?api_key=2105b7aaa5e5e75ccc7797a3d78c360e&access_token=eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMTA1YjdhYWE1ZTVlNzVjY2M3Nzk3YTNkNzhjMzYwZSIsInN1YiI6IjY0ODQ0ZGZkZDJiMjA5MDBjYTFmMGNhZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9I-Q5JNBmL7uanr9Yy2cXFJKfT8QdxGP3W3Xd1CZ0XA&query=${query}`
  );
  return data;
};
getSearchMovies('flash').then(data => console.log(data));
// Инфо фильм
export const getDetailsMovies = async movie_id => {
  const data = await axios.get(
    `https://api.themoviedb.org/3/movie/${movie_id}?api_key=2105b7aaa5e5e75ccc7797a3d78c360e&access_token=eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMTA1YjdhYWE1ZTVlNzVjY2M3Nzk3YTNkNzhjMzYwZSIsInN1YiI6IjY0ODQ0ZGZkZDJiMjA5MDBjYTFmMGNhZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9I-Q5JNBmL7uanr9Yy2cXFJKfT8QdxGP3W3Xd1CZ0XA`
  );
  return data;
};

// Актёры
export const getCreditsMovies = async movie_id => {
  const data = await axios.get(
    `https://api.themoviedb.org/3/movie/${movie_id}/credits?api_key=2105b7aaa5e5e75ccc7797a3d78c360e&access_token=eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMTA1YjdhYWE1ZTVlNzVjY2M3Nzk3YTNkNzhjMzYwZSIsInN1YiI6IjY0ODQ0ZGZkZDJiMjA5MDBjYTFmMGNhZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9I-Q5JNBmL7uanr9Yy2cXFJKfT8QdxGP3W3Xd1CZ0XA`
  );
  return data;
};
// Обзоры
export const getReviewsMovies = async movie_id => {
  const data = await axios.get(
    `https://api.themoviedb.org/3/movie/${movie_id}/reviews?api_key=2105b7aaa5e5e75ccc7797a3d78c360e&access_token=eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMTA1YjdhYWE1ZTVlNzVjY2M3Nzk3YTNkNzhjMzYwZSIsInN1YiI6IjY0ODQ0ZGZkZDJiMjA5MDBjYTFmMGNhZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9I-Q5JNBmL7uanr9Yy2cXFJKfT8QdxGP3W3Xd1CZ0XA`
  );
  return data;
};
