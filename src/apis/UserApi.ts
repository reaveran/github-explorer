import { GithubExplorerApi } from "@/modules/GithubExplorerApi";

const getUsersByUsername = async (params: SearchUserParams) => {
  return GithubExplorerApi.get<SearchUserResponse>("/search/users", {
    q: params.query,
    per_page: params.per_page,
  });
};

const getReposByUsername = async (
  username: string,
  params: PaginationParams,
) => {
  return GithubExplorerApi.get<Repository[]>(
    `/users/${username}/repos`,
    params,
  );
};

export const UserApi = {
  getUsersByUsername,
  getReposByUsername,
};
