import React from 'react';

const Search = ({ createNote }: any) => {
  return (
    <div className="p-10">
      <div
        className="flex items-end justify-center rounded-lg bg-cover bg-center "
        style={{
          height: '250px',
          backgroundImage:
            'url(https://www.sjpl.org/sites/default/files/images-legacy/book_with_yellow_background_smaller.jpg)',
        }}
      >
        <button onClick={createNote}>Add</button>
      </div>
    </div>
  );
};

export default Search;
