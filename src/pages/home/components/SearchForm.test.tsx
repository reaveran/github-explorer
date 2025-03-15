import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import SearchForm from "./SearchForm";

describe("SearchForm", () => {
  it("should render input field and button", () => {
    render(<SearchForm onSearch={vi.fn()} />);

    expect(screen.getByPlaceholderText("Enter username")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Search" })).toBeInTheDocument();
  });

  it("should call onSearch with input value when button is clicked", () => {
    const mockOnSearch = vi.fn();
    render(<SearchForm onSearch={mockOnSearch} />);

    const input = screen.getByPlaceholderText("Enter username");
    const button = screen.getByRole("button", { name: "Search" });

    fireEvent.change(input, { target: { value: "testuser" } });
    fireEvent.click(button);

    expect(mockOnSearch).toHaveBeenCalledWith("testuser");
  });
});
