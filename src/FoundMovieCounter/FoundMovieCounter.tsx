import './style.css';

export default function FoundMovieCounter(
  { number }: { number: number },
) {
  return (
    <div className="results">
      <div className="movie-counter">
        <strong>
          {number}
        </strong>

        {' '}
        movies found
      </div>
    </div>
  );
}