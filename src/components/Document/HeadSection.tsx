import React from "react";
import NoteSearch from "../Search/NoteSearch";
import Badge from "../Editor/EditorHeader/badge";

const Search = ({ searchNotes, notebook }: any) => {
  return (
    <div className="pt-5 pb-1">
      <NoteSearch searchNotes={searchNotes} />
    </div>
  );
};

export default Search;
