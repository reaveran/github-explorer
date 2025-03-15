import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";

import Button from "./Button";

describe("Button component", () => {
  it("renders children correctly", () => {
    render(<Button onClick={vi.fn()}>This is a button</Button>);
    expect(screen.getByText("This is a button")).toBeInTheDocument();
  });

  it("applies custom styling correctly based on variant", () => {
    render(
      <Button onClick={vi.fn()} variant="link">
        Test
      </Button>,
    );
    expect(screen.getByText("Test")).toHaveClass(
      "text-blue-700 hover:text-blue-900 transition-all duration-300",
    );
  });

  it("calls onClick handler when clicked", async () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>This is a button</Button>);
    await userEvent.click(screen.getByText("This is a button"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
