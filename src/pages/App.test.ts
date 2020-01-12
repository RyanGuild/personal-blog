import React from "react";
import { render } from "@testing-library/react";
import App from ".";

test("renders learn react link", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

describe("another test with describe syntax", () => {
  expect(true).toBe(true);
});
