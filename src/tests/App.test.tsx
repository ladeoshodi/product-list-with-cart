import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";

import App from "../App";

describe("App Component", () => {
  test("App renders", () => {
    render(<App />);
    expect(screen.getByText("Desserts")).toBeTruthy();
    expect(screen.getByText(/Your Cart/)).toBeTruthy();
  });
});
