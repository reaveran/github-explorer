import { useMemo, useRef, useState } from "react";

import { Accordion, Button, Skeleton, Typography } from "@/components";

import RepositoryCard from "./RepositoryCard";

import { useGetReposByUsername } from "@/hooks/user";

type UserAccordionProps = {
  user: User;
};

const UserAccordion: React.FC<UserAccordionProps> = ({ user }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { data, isFetching, hasNextPage, fetchNextPage, isFetched, error } =
    useGetReposByUsername(user.login, isOpen);

  const contentRef = useRef<HTMLDivElement>(null);

  const renderSkeleton = useMemo(() => {
    return (
      <div className="flex flex-col gap-2 mt-2">
        {Array.from({ length: 5 }).map((_, index) => (
          <Skeleton key={index} height={60} />
        ))}
      </div>
    );
  }, []);

  const renderData = useMemo(() => {
    if (data.length) {
      return (
        <div className="flex flex-col gap-2">
          {data.map((repo) => (
            <RepositoryCard key={repo.id} repository={repo} />
          ))}
        </div>
      );
    }
    if (data.length === 0 && isFetched) {
      return (
        <Typography variant="small" className="mb-4 text-neutral-600">
          No available repository
        </Typography>
      );
    }
  }, [data, isFetched]);

  const handleNextPage = () => {
    fetchNextPage();
    if (contentRef.current) {
      setTimeout(() => {
        contentRef.current?.scrollTo({
          top: contentRef.current.scrollHeight,
          behavior: "smooth",
        });
      }, 300);
    }
  };

  return (
    <Accordion
      id={user.id.toString()}
      title={user.login}
      onOpen={() => setIsOpen(true)}
      contentRef={contentRef}
    >
      {renderData}
      {isFetching && renderSkeleton}
      {hasNextPage && (
        <div className="flex mt-4 flex-row justify-center">
          <Button onClick={handleNextPage}>Load more</Button>
        </div>
      )}
      {error && (
        <Typography className="mt-2">
          Something went wrong, try again later
        </Typography>
      )}
    </Accordion>
  );
};

export default UserAccordion;
