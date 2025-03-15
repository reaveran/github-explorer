type User = {
  id: number;
  login: string;
};

type SearchUserParams = {
  query: string;
  per_page: number;
};

type SearchUserResponse = {
  items: User[];
  total_count: number;
};
