import { render, screen } from "@testing-library/react";
import App from "./App";

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/hello/i);
//   expect(linkElement).toBeInTheDocument();
// });
describe("App component render", () => {
  test("renders the text hello", () => {
    render(<App />);
    const textElement = screen.getByText(/hello/i);
    expect(textElement).toBeInTheDocument();
  });
});
