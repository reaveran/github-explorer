import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";

import TextInput from "./TextInput";

describe("TextInput component", () => {
  it("renders input element correctly", () => {
    render(<TextInput placeholder="Enter text" />);
    expect(screen.getByPlaceholderText("Enter text")).toBeInTheDocument();
  });

  it("calls onChange handler when typing", async () => {
    const handleChange = vi.fn();
    render(<TextInput onChange={handleChange} />);
    const input = screen.getByRole("textbox");
    await userEvent.type(input, "Hello");
    expect(handleChange).toHaveBeenCalled();
  });

  it("accepts ref and focuses input", async () => {
    const ref = React.createRef<HTMLInputElement>();
    render(<TextInput ref={ref} />);
    ref.current?.focus();
    expect(ref.current).toHaveFocus();
  });
});
