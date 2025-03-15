import { useInfiniteQuery, useQuery } from "@tanstack/react-query";

import { UserApi } from "@/apis/UserApi";

export const PER_PAGE = 10;

/**
 * useSearchUsersByUsername - A custom hook to fetch max 5 users that have similar username from API using react-query.
 * @returns {UseQueryResult} An object containing:
 * - data: response that contain list of users when the query is successful
 * - isLoading: boolean indicating if the query is in loading state
 * - error: Error object if the query fails
 * - and other react-query result properties
 */
export const useSearchUsersByUsername = (query: string) => {
  return useQuery({
    queryFn: () =>
      query
        ? UserApi.getUsersByUsername({ query, per_page: 5 })
        : Promise.resolve(undefined),
    queryKey: ["searchUsersByUsernameQuery", query],
    enabled: query !== "",
  });
};

/**
 * useGetReposByUsername - A custom hook to fetch repository based on username from API using react-query.
 * @returns {UseQueryResult} An object containing:
 * - data: list of repositories when the query is successful
 * - isLoading: boolean indicating if the query is in loading state
 * - error: Error object if the query fails
 * - and other react-query result properties
 */
export const useGetReposByUsername = (username: string, enabled = false) => {
  const query = useInfiniteQuery({
    queryFn: ({ pageParam }) =>
      username !== ""
        ? UserApi.getReposByUsername(username, {
            page: pageParam,
            per_page: PER_PAGE,
          })
        : Promise.resolve([]),
    queryKey: ["getUserDiscussionQuery", username],
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) =>
      lastPage.length === PER_PAGE ? allPages.length + 1 : undefined,
    enabled: username !== "" && enabled,
  });
  const data = query.data?.pages?.flatMap((item) => item) ?? [];
  return { ...query, data };
};
