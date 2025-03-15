import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import Skeleton from "./Skeleton";

describe("Skeleton component", () => {
  it("renders with default height", () => {
    render(<Skeleton />);
    const skeletonElement = screen.getByTestId("skeleton-test");
    expect(skeletonElement).toHaveStyle("height: 20px");
  });

  it("renders skeleton with custom width and height", () => {
    render(<Skeleton width={20} height={30} />);

    const skeletonElement = screen.getByTestId("skeleton-test");
    expect(skeletonElement).toHaveStyle("height: 30px");
    expect(skeletonElement).toHaveStyle("width: 20px");
  });

  it("renders with default height", () => {
    render(<Skeleton />);
    const skeletonElement = screen.getByTestId("skeleton-test");
    expect(skeletonElement).toHaveClass("w-full");
  });
});
