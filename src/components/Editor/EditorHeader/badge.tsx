import React from "react";

const Badge = ({ title, deleteTag, id, cross = true }: any) => {
  return (
    <span
      id="badge-dismiss-gray"
      className="mr-2 inline-flex items-center rounded-full bg-purple-400 px-2 py-0.5 text-xs font-medium text-white dark:bg-purple-700 dark:text-gray-300 hover:bg-purple-600 cursor-pointer transition-all duration-200 ease-in-out"
    >
      {title}
      {cross === true && (
        <button
          type="button"
          className="ml-2 flex-shrink-0 w-3 h-3 rounded-full bg-purple text-gray-600 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-800 dark:hover:text-gray-300"
          data-dismiss-target="#badge-dismiss-gray"
          aria-label="Remove"
          onClick={() => {
            deleteTag(id, title);
          }}
        >
          <svg
            className="w-full h-full"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      )}
    </span>
  );
};

export default Badge;
