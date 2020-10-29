import { render, screen } from "@testing-library/react";
import App from "./App";

it("renders", () => {
  render(<App />);
  const linkElement = screen.getAllByText(/ghost writing/i)[0];
  expect(linkElement).toBeInTheDocument();
});
