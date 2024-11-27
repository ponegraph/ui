import React from "react";

interface SearchBarProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  onSearch: () => void; // Callback untuk aksi pencarian
}

const SearchBar: React.FC<SearchBarProps> = ({
  searchTerm,
  setSearchTerm,
  onSearch,
}) => {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onSearch();
    }
  };

  return (
    <div className="flex items-center bg-gray-700 rounded-full px-4 py-2 w-full max-w-md">
      <input
        type="text"
        placeholder="What do you want to search for?"
        className="bg-transparent outline-none text-gray-300 w-full px-2"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyDown={handleKeyDown} // Tangani tombol Enter
      />
      <button
        onClick={onSearch} // Tangani klik pada tombol pencarian
        className="ml-2 text-gray-400 hover:text-white focus:outline-none"
        aria-label="Search"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-4.35-4.35m0 0a7.5 7.5 0 10-10.6-10.6 7.5 7.5 0 0010.6 10.6z"
          />
        </svg>
      </button>
    </div>
  );
};

export default SearchBar;
