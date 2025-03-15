import { PropsWithChildren } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { renderHook, waitFor } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";

import { UserApi } from "@/apis/UserApi";

import { useGetReposByUsername, useSearchUsersByUsername } from "./user";

import { repositoriesMock, userSearchResultMock } from "@/__test__/mockData";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false, // Ensure queries do NOT retry
      staleTime: 0, // Disable caching for fresh tests
    },
  },
});

const wrapper = ({ children }: PropsWithChildren) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);

describe("useSearchUsersByUsername", () => {
  afterEach(() => {
    vi.clearAllMocks();
    queryClient.clear();
  });
  it("should return user list data when query is successful", async () => {
    vi.spyOn(UserApi, "getUsersByUsername").mockResolvedValueOnce(
      userSearchResultMock,
    );

    const { result } = renderHook(() => useSearchUsersByUsername("test"), {
      wrapper,
    });

    await waitFor(() => result.current.isSuccess);

    expect(result.current.isLoading).toBe(false);
    expect(result.current.isError).toBe(false);
    expect(result.current.data).toEqual(userSearchResultMock);
  });

  it("should return undefined data when query is failed", async () => {
    vi.spyOn(UserApi, "getUsersByUsername").mockRejectedValueOnce({
      status: "error",
    });

    const { result } = renderHook(() => useSearchUsersByUsername("test"), {
      wrapper,
    });

    await waitFor(() => result.current.isError);
    expect(result.current.data).toEqual(undefined);
  });
});

describe("useGetReposByUsername", () => {
  afterEach(() => {
    vi.clearAllMocks();
    queryClient.clear();
  });
  it("should return repositories list data when query is successful", async () => {
    vi.spyOn(UserApi, "getReposByUsername").mockResolvedValueOnce(
      repositoriesMock,
    );

    const { result } = renderHook(
      () => useGetReposByUsername("testUser", true),
      {
        wrapper,
      },
    );

    await waitFor(() => expect(result.current.isSuccess).toBe(true));
    expect(result.current.isLoading).toBe(false);
    expect(result.current.isError).toBe(false);
    expect(result.current.data).toEqual(repositoriesMock);
  });

  it("should return empty array data when query is failed", async () => {
    vi.spyOn(UserApi, "getReposByUsername").mockRejectedValueOnce({
      status: "error",
    });

    const { result } = renderHook(() => useGetReposByUsername("test", true), {
      wrapper,
    });

    await waitFor(() => expect(result.current.isError).toBe(true));
    expect(result.current.data).toEqual([]);
  });
});
