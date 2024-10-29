import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";

import DessertList from "../components/dessertsPage/DessertList";

describe("Desserts Page", () => {
  test("Dessert page renders", () => {
    render(<DessertList />);
    expect(screen.getByText("Desserts")).toBeTruthy();
  });
});
