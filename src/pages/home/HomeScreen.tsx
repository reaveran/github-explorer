import { Accordion } from "@/components";

import RepositoryCard from "./components/RepositoryCard";
import SearchForm from "./components/SearchForm";

const HomeScreen = () => {
  const onSearch = (searchText: string) => {};

  return (
    <main>
      <SearchForm onSearch={onSearch} />
      <Accordion id="item-1" title="title 1">
        <div className="flex flex-col gap-2">
          <RepositoryCard
            repository={{
              id: "123",
              title: "Github Explorer",
              description:
                "A website to search username and their repositories",
              favorites: 20,
            }}
          />
          <RepositoryCard
            repository={{
              id: "123",
              title: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Dui`,
              description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.`,
              favorites: 3001,
            }}
          />
        </div>
      </Accordion>
      <Accordion id="item-2" title="title 2">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </Accordion>
    </main>
  );
};

export default HomeScreen;
