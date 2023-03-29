import { render, screen } from "@testing-library/react";
import { Greet } from "./Greet";

test("Greet Render Correctly", () => {
  render(<Greet/>)
  const textElement = screen.getByText(/Hello/i)
  expect(textElement).toBeInTheDocument()
});

