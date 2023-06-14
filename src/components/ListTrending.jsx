import { ListTrindingItem } from './ListTrindingItem';

export const ListTrending = ({ apiMovies }) => {
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
