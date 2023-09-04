import './style.css';

type FoundMovieCounterProps = {
  amount: number;
};

export function FoundMovieCounter({ amount }: FoundMovieCounterProps) {
  return (
    <div className="results">
      <div className="movie-counter">
        <strong>{amount}</strong> movies found
      </div>
    </div>
  );
}
