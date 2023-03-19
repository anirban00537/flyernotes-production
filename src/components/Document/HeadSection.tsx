import React from "react";
import NoteSearch from "../Search/NoteSearch";

const Search = ({ searchNotes, notebook }: any) => {
  return (
    <div className="pt-5 pb-3">
      {/* <div
        className="flex items-end justify-start rounded-lg mb-5"
        style={{
          height: "150px",
          background: "linear-gradient(to bottom, #9C27B0, #6A1B9A)",
        }}
      >
        <h1 className="text-white font-bold text-5xl p-10">{notebook?.name}</h1>
      </div> */}
      <NoteSearch searchNotes={searchNotes} />
    </div>
  );
};

export default Search;
