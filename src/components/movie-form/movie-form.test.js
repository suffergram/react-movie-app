import { render, screen } from "@testing-library/react";
import { MovieForm } from "./movie-form";

describe('Movie form', () => {
  it('Matches the snapshot', () => {
    render(
      <MovieForm />
    );

    const form = screen.getByLabelText('movie-form');

    expect(form).toMatchSnapshot();
  });
});