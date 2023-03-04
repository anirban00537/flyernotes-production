import React from 'react';

const Badge = ({ title, deleteTag, id }: any) => {
  return (
    <span
      id="badge-dismiss-gray"
      className="mr-2 inline-flex items-center rounded bg-gray-100 px-2 py-1 text-sm font-medium text-gray-800 dark:bg-gray-900 dark:text-gray-300"
    >
      {title}
      <button
        type="button"
        className="ml-2 inline-flex items-center rounded-sm bg-transparent p-0.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-800 dark:hover:text-gray-300"
        data-dismiss-target="#badge-dismiss-gray"
        aria-label="Remove"
        onClick={() => {
          deleteTag(id, title);
        }}
      >
        <svg
          aria-hidden="true"
          className="h-3.5 w-3.5"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clip-rule="evenodd"
          ></path>
        </svg>
        <span className="sr-only">Remove badge</span>
      </button>
    </span>
  );
};

export default Badge;
