import React, { useEffect, useState } from "react";
import { useDebounce } from "use-debounce";

const NoteSearch = ({ searchNotes }: any) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [value] = useDebounce(searchTerm, 500);

  // searchNotes(value);
  useEffect(() => {
    value && searchNotes(value);
  }, [value]);
  return (
    <form
      onSubmit={(event: any) => {
        event.preventDefault();
      }}
    >
      <label
        htmlFor="default-search"
        className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
      >
        Search
      </label>

      <div className="relative">
        <input
          type="search"
          id="default-search"
          className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-200 rounded-lg bg-white focus:ring-purple-500 focus:border-purple-500 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-purple-500 dark:focus:border-purple-500"
          placeholder="Search Notes..."
          required
          value={searchTerm}
          onChange={(e: any) => {
            setSearchTerm(e.target.value);
          }}
        />
        <button
          type="submit"
          className="text-white absolute right-2.5 bottom-2.5 bg-purple-500 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-purple-600 dark:hover:bg-purple-500 dark:focus:ring-purple-800"
        >
          Search
        </button>
      </div>
    </form>
  );
};

export default NoteSearch;
