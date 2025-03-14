import { useState } from "react";

import { Button, TextInput } from "@/components";

type SearchFormProps = {
  onSearch: (text: string) => void;
};

const SearchForm: React.FC<SearchFormProps> = ({ onSearch }) => {
  const [username, setUsername] = useState<string>("");

  const handleSearch = () => {
    onSearch(username);
  };

  return (
    <div className="flex flex-col sm:flex-row gap-2 mb-4">
      <div className="w-full sm:w-80">
        <TextInput
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter username"
        />
      </div>
      <Button className="w-full sm:w-auto" onClick={handleSearch}>
        Search
      </Button>
    </div>
  );
};

export default SearchForm;
