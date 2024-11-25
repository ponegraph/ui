import React from "react";

interface SearchBarProps {
  placeholder: string;
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ placeholder, searchTerm, setSearchTerm }) => {
  return (
    <div className="mb-6 flex items-center bg-gray-700 rounded-full px-4 py-2 w-full max-w-md">
      <input
        type="text"
        placeholder={placeholder}
        className="bg-transparent outline-none text-gray-300 w-full px-2"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-6 h-6 text-gray-400"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 21l-4.35-4.35m0 0a7.5 7.5 0 10-10.6-10.6 7.5 7.5 0 0010.6 10.6z"
        />
      </svg>
    </div>
  );
};

export default SearchBar;
