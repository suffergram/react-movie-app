import { render, screen } from "@testing-library/react";
import { Loading } from "./loading";

describe('Loading', () => {
  it('Has a header', () => {
    render(
      <Loading />
    );

    const header = screen.getByRole('heading', {
      level: 2,
    })

    expect(header).toBeInTheDocument();
  })
})