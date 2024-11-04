import { describe, expect, test } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";

import App from "../App";

describe("App Component", () => {
  test("App renders", () => {
    render(<App />);
    expect(screen.getByText("Desserts")).toBeTruthy();
    expect(screen.getByText(/Your Cart/)).toBeTruthy();
  });

  test("Add item to cart", () => {
    render(<App />);

    const addToCartBtn = screen.getAllByRole("button", { name: "Add to Cart" });
    fireEvent.click(addToCartBtn[0]);

    expect(screen.getAllByText("Order Total")).toBeTruthy();
  });

  test("Remove item from cart", () => {
    render(<App />);

    const removeFromCartBtn = screen.getAllByRole("button", {
      name: "Remove Item",
    });
    fireEvent.click(removeFromCartBtn[0]);

    expect(
      screen.findByText("Your added items will be added here")
    ).toBeTruthy();
  });
});
