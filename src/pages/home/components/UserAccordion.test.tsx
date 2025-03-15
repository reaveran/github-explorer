import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import UserAccordion from "./UserAccordion";

import { repositoriesMock, userSearchResultMock } from "@/__test__/mockData";
import { useGetReposByUsername } from "@/hooks/user";

vi.mock("@/hooks/user", () => ({
  useGetReposByUsername: vi.fn(),
}));

describe("UserAccordion", () => {
  it("should render user login and toggle accordion on click", async () => {
    useGetReposByUsername.mockReturnValue({
      data: [],
      isFetching: false,
      hasNextPage: false,
      fetchNextPage: vi.fn(),
      isFetched: true,
      error: null,
    });

    render(<UserAccordion user={userSearchResultMock.items[0]} />);

    const title = screen.getByText("reave");
    expect(title).toBeInTheDocument();
    fireEvent.click(title);

    await waitFor(() =>
      expect(useGetReposByUsername).toHaveBeenCalledWith("reave", true),
    );
  });

  it("should render repository list when data is available", async () => {
    useGetReposByUsername.mockReturnValue({
      data: repositoriesMock,
      isFetching: false,
      hasNextPage: false,
      fetchNextPage: vi.fn(),
      isFetched: true,
      error: null,
    });

    render(<UserAccordion user={userSearchResultMock.items[0]} />);
    fireEvent.click(screen.getByText("reave"));

    await waitFor(() => {
      expect(screen.getByText("ArrJanitor")).toBeInTheDocument();
      expect(
        screen.getByText(
          "A python script designed to clean up Radarr/Sonarr downloads in Deluge.",
        ),
      ).toBeInTheDocument();
    });
  });

  it("should show loading skeleton when fetching", () => {
    useGetReposByUsername.mockReturnValue({
      data: [],
      isFetching: true,
      hasNextPage: false,
      fetchNextPage: vi.fn(),
      isFetched: false,
      error: null,
    });

    render(<UserAccordion user={userSearchResultMock.items[0]} />);
    fireEvent.click(screen.getByText("reave"));

    expect(screen.getAllByTestId("skeleton-test").length).toBeGreaterThan(0);
  });

  it("should show error message on failure", async () => {
    useGetReposByUsername.mockReturnValue({
      data: [],
      isFetching: false,
      hasNextPage: false,
      fetchNextPage: vi.fn(),
      isFetched: true,
      error: new Error("Failed to fetch"),
    });

    render(<UserAccordion user={userSearchResultMock.items[0]} />);
    fireEvent.click(screen.getByText("reave"));

    await waitFor(() => {
      expect(
        screen.getByText("Something went wrong, try again later"),
      ).toBeInTheDocument();
    });
  });
});
