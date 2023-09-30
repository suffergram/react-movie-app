import { Counter } from './style';

type FoundMovieCounterProps = {
  amount: number;
};

export function FoundMovieCounter({ amount }: FoundMovieCounterProps) {
  return (
    <Counter>
      <strong>{amount}</strong>
      <p>movies found</p>
    </Counter>
  );
}
