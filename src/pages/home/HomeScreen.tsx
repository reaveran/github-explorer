import { useMemo, useState } from "react";

import { Skeleton, Typography } from "@/components";
import { queryClient } from "@/modules/QueryProvider";

import SearchForm from "./components/SearchForm";
import UserAccordion from "./components/UserAccordion";

import { useSearchUsersByUsername } from "@/hooks/user";

const HomeScreen = () => {
  const [searchText, setSearchText] = useState<string>("");
  const { data, isFetching, isFetched, error } =
    useSearchUsersByUsername(searchText);

  const onSearch = async (query: string) => {
    if (query === "") {
      await queryClient.resetQueries({
        queryKey: ["searchUsersByUsernameQuery"],
      });
    }
    setSearchText(query);
  };

  const renderSkeleton = useMemo(() => {
    return (
      <div className="flex flex-col gap-2">
        {Array.from({ length: 5 }).map((_, index) => (
          <Skeleton key={index} height={45} />
        ))}
      </div>
    );
  }, []);

  const renderData = useMemo(() => {
    if (data?.items.length) {
      return (
        <>
          <Typography variant="small" className="mb-4 text-neutral-600">
            Showing users for "{searchText}"
          </Typography>
          {(data?.items || []).map((user) => (
            <UserAccordion key={user.id} user={user} />
          ))}
        </>
      );
    }
    if (data?.items.length === 0 && isFetched) {
      return (
        <Typography variant="small" className="mb-4 text-neutral-600">
          No username with "{searchText}"
        </Typography>
      );
    }
  }, [data, isFetched, searchText]);

  return (
    <main>
      <SearchForm onSearch={onSearch} />
      {isFetching && renderSkeleton}
      {renderData}
      {error && <Typography>Something went wrong, try again later</Typography>}
    </main>
  );
};

export default HomeScreen;
