import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import Accordion from "./Accordion";

describe("Accordion component", () => {
  it("renders the title correctly", () => {
    render(
      <Accordion id="test" title="Accordion Title">
        Content
      </Accordion>,
    );
    expect(screen.getByText("Accordion Title")).toBeInTheDocument();
  });

  it("does not show content by default", () => {
    render(
      <Accordion id="test" title="Accordion Title">
        Hidden Content
      </Accordion>,
    );
    expect(screen.getByTestId("test")).not.toBeChecked();
  });

  it("shows content when clicked", () => {
    render(
      <Accordion id="test" title="Accordion Title">
        Visible Content
      </Accordion>,
    );
    const titleElement = screen.getByText("Accordion Title");
    fireEvent.click(titleElement);
    expect(screen.getByTestId("test")).toBeChecked();
  });

  it("calls onOpen when opened", () => {
    const onOpenMock = vi.fn();
    render(
      <Accordion id="test" title="Accordion Title" onOpen={onOpenMock}>
        Content
      </Accordion>,
    );
    const titleElement = screen.getByText("Accordion Title");
    fireEvent.click(titleElement);
    expect(onOpenMock).toHaveBeenCalledTimes(1);
  });

  it("toggles visibility when clicked multiple times", () => {
    render(
      <Accordion id="test" title="Accordion Title">
        Toggling Content
      </Accordion>,
    );
    const titleElement = screen.getByText("Accordion Title");

    fireEvent.click(titleElement);
    expect(screen.getByTestId("test")).toBeChecked();

    fireEvent.click(titleElement);
    expect(screen.getByTestId("test")).not.toBeChecked();
  });
});
