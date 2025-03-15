import { afterEach, describe, expect, test, vi } from "vitest";

import { GithubExplorerApi } from "@/modules/GithubExplorerApi";

import { UserApi } from "./UserApi";

import { repositoriesMock, userSearchResultMock } from "@/__test__/mockData";

describe("UserApi", () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  test("should fetch search result of user", async () => {
    vi.spyOn(GithubExplorerApi.client, "get").mockResolvedValueOnce({
      data: userSearchResultMock,
    });

    const users = await UserApi.getUsersByUsername({
      query: "test",
      per_page: 5,
    });
    expect(users).toEqual(userSearchResultMock);
  });

  test("should fetch respositories list", async () => {
    vi.spyOn(GithubExplorerApi.client, "get").mockResolvedValueOnce({
      data: repositoriesMock,
    });

    const repoList = await UserApi.getReposByUsername("test", {});
    expect(repoList).toEqual(repositoriesMock);
  });
});
