import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import Typography from "./Typography";

describe("Typography component", () => {
  it("renders children correctly", () => {
    render(<Typography>Hello World</Typography>);
    expect(screen.getByText("Hello World")).toBeInTheDocument();
  });

  it("applies custom styling correctly based on variant", () => {
    render(<Typography variant="h1">Hello World</Typography>);
    expect(screen.getByText("Hello World")).toHaveClass("text-xl font-bold");
  });
});
