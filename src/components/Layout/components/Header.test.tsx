import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import Header from "./Header";

describe("Header component", () => {
  it("renders header with logo correctly", () => {
    render(<Header />);
    expect(screen.getByText("Github Explorer")).toBeInTheDocument();
  });
});
