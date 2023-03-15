import React from "react";
import NoteSearch from "../Search/NoteSearch";

const Search = () => {
  return (
    <div className="p-10 pb-3">
      {/* <div
        className="flex items-end justify-center rounded-lg bg-cover bg-center  mb-5"
        style={{
          height: "150px",
          backgroundImage:
            "url(https://cdn.pixabay.com/photo/2016/03/16/09/42/abstract-background-1260114_960_720.jpg)",
        }}
      ></div> */}
      <NoteSearch />
    </div>
  );
};

export default Search;
