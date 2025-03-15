import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import HomeScreen from "./HomeScreen";

import { repositoriesMock, userSearchResultMock } from "@/__test__/mockData";
import { useGetReposByUsername, useSearchUsersByUsername } from "@/hooks/user";

vi.mock("@/hooks/user", () => ({
  useSearchUsersByUsername: vi.fn(),
  useGetReposByUsername: vi.fn(),
}));

describe("HomeScreen", () => {
  it("should render the search form", () => {
    useSearchUsersByUsername.mockReturnValue({
      data: null,
      isFetching: false,
      isFetched: false,
      error: null,
    });

    render(<HomeScreen />);
    expect(screen.getByPlaceholderText("Enter username")).toBeInTheDocument();
    expect(screen.getByText("Search")).toBeInTheDocument();
  });

  it("should show loading skeleton when fetching", () => {
    useSearchUsersByUsername.mockReturnValue({
      data: null,
      isFetching: true,
      isFetched: false,
      error: null,
    });

    render(<HomeScreen />);
    expect(screen.getAllByTestId("skeleton-test").length).toBeGreaterThan(0);
  });

  it("should display users when data is available", async () => {
    useSearchUsersByUsername.mockReturnValue({
      data: userSearchResultMock,
      isFetching: false,
      isFetched: true,
      error: null,
    });

    useGetReposByUsername.mockReturnValue({
      data: repositoriesMock,
      isFetching: false,
      hasNextPage: false,
      fetchNextPage: vi.fn(),
      isFetched: true,
      error: null,
    });

    render(<HomeScreen />);

    const input = screen.getByPlaceholderText("Enter username");
    const button = screen.getByRole("button", { name: "Search" });
    fireEvent.change(input, { target: { value: "reave" } });
    fireEvent.click(button);

    // eslint-disable-next-line quotes
    await waitFor(() => expect(screen.getByText('Showing users for "reave"')));
    expect(screen.getByText("reave")).toBeInTheDocument();
  });

  it("should show error message on failure", async () => {
    useSearchUsersByUsername.mockReturnValue({
      data: null,
      isFetching: false,
      isFetched: false,
      error: new Error("Failed to fetch"),
    });

    render(<HomeScreen />);
    await waitFor(() =>
      expect(
        screen.getByText("Something went wrong, try again later"),
      ).toBeInTheDocument(),
    );
  });
});
