import React, { useEffect, useState } from 'react';
import * as api from '../components/api';
import { useParams } from 'react-router-dom';

export const Reviews = () => {
  const [reviews, setReviews] = useState('');
  const { movieId } = useParams();
  // console.log(reviews);

  useEffect(() => {
    api
      .getReviewsMovies(movieId)
      .then(data => {
        setReviews(data.data.results);
      })
      .catch(e => console.log(e));
  }, [movieId]);
  return reviews && reviews.length > 0 ? (
    <ul>
      {reviews &&
        reviews.map(el => (
          <li
            style={{
              border: 'solid',
              listStyle: 'none',
              padding: '10px',
              margin: '10px',
            }}
            key={el.id}
          >
            <h4>{el.author}</h4>
            <p>{el.content}</p>
          </li>
        ))}
    </ul>
  ) : (
    <p>There are no reviews for this film yet.</p>
  );
};

// export default Reviews;
