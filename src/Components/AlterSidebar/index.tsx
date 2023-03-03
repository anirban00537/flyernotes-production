import React from 'react';
import { TbMapSearch } from 'react-icons/tb';
const EndSidebar = () => {
  return (
    <aside
      className=" height-full sticky top-0 h-screen border-l bg-white p-2 pt-0 "
      aria-label="Sidebar"
      style={{
        minWidth: '300px',
        maxWidth: '300px',
      }}
    >
      <div className="mt-10">
        <h1 className="mb-2">Tags</h1>

        <span
          id="badge-dismiss-default"
          className="m-1 mr-2 inline-flex items-center rounded bg-blue-100 py-1 px-2 text-sm font-medium text-blue-800 dark:bg-blue-200 dark:text-blue-800"
        >
          Default
          <button
            type="button"
            className="ml-2 inline-flex items-center rounded-sm bg-transparent p-0.5 text-sm text-blue-400 hover:bg-blue-200 hover:text-blue-900 dark:hover:bg-blue-300 dark:hover:text-blue-900"
            data-dismiss-target="#badge-dismiss-default"
            aria-label="Remove"
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
        <span
          id="badge-dismiss-dark"
          className="m-1 mr-2 inline-flex items-center rounded bg-gray-100 py-1 px-2 text-sm font-medium text-gray-800 dark:bg-gray-200 dark:text-gray-800"
        >
          Dark
          <button
            type="button"
            className="ml-2 inline-flex items-center rounded-sm bg-transparent p-0.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-300 dark:hover:text-gray-900"
            data-dismiss-target="#badge-dismiss-dark"
            aria-label="Remove"
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
        <span
          id="badge-dismiss-red"
          className="m-1 mr-2 inline-flex items-center rounded bg-red-100 py-1 px-2 text-sm font-medium text-red-800 dark:bg-red-200 dark:text-red-800"
        >
          Red
          <button
            type="button"
            className="ml-2 inline-flex items-center rounded-sm bg-transparent p-0.5 text-sm text-red-400 hover:bg-red-200 hover:text-red-900 dark:hover:bg-red-300 dark:hover:text-red-900"
            data-dismiss-target="#badge-dismiss-red"
            aria-label="Remove"
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
        <span
          id="badge-dismiss-green"
          className="m-1 mr-2 inline-flex items-center rounded bg-green-100 py-1 px-2 text-sm font-medium text-green-800 dark:bg-green-200 dark:text-green-800"
        >
          Green
          <button
            type="button"
            className="ml-2 inline-flex items-center rounded-sm bg-transparent p-0.5 text-sm text-green-400 hover:bg-green-200 hover:text-green-900 dark:hover:bg-green-300 dark:hover:text-green-900"
            data-dismiss-target="#badge-dismiss-green"
            aria-label="Remove"
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
        <span
          id="badge-dismiss-yellow"
          className="m-1 mr-2 inline-flex items-center rounded bg-yellow-100 py-1 px-2 text-sm font-medium text-yellow-800 dark:bg-yellow-200 dark:text-yellow-800"
        >
          Yellow
          <button
            type="button"
            className="ml-2 inline-flex items-center rounded-sm bg-transparent p-0.5 text-sm text-yellow-400 hover:bg-yellow-200 hover:text-yellow-900 dark:hover:bg-yellow-300 dark:hover:text-red-900"
            data-dismiss-target="#badge-dismiss-yellow"
            aria-label="Remove"
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
        <span
          id="badge-dismiss-indigo"
          className="m-1 mr-2 inline-flex items-center rounded bg-indigo-100 py-1 px-2 text-sm font-medium text-indigo-800 dark:bg-indigo-200 dark:text-indigo-800"
        >
          Indigo
          <button
            type="button"
            className="ml-2 inline-flex items-center rounded-sm bg-transparent p-0.5 text-sm text-indigo-400 hover:bg-indigo-200 hover:text-indigo-900 dark:hover:bg-indigo-300 dark:hover:text-indigo-900"
            data-dismiss-target="#badge-dismiss-indigo"
            aria-label="Remove"
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
        <span
          id="badge-dismiss-purple"
          className="m-1 mr-2 inline-flex items-center rounded bg-purple-100 py-1 px-2 text-sm font-medium text-purple-800 dark:bg-purple-200 dark:text-purple-800"
        >
          Purple
          <button
            type="button"
            className="ml-2 inline-flex items-center rounded-sm bg-transparent p-0.5 text-sm text-purple-400 hover:bg-purple-200 hover:text-purple-900 dark:hover:bg-purple-300 dark:hover:text-purple-900"
            data-dismiss-target="#badge-dismiss-purple"
            aria-label="Remove"
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
        <span
          id="badge-dismiss-pink"
          className="m-1 mr-2 inline-flex items-center rounded bg-pink-100 py-1 px-2 text-sm font-medium text-pink-800 dark:bg-pink-200 dark:text-pink-800"
        >
          Pink
          <button
            type="button"
            className="ml-2 inline-flex items-center rounded-sm bg-transparent p-0.5 text-sm text-pink-400 hover:bg-pink-200 dark:hover:bg-pink-300 dark:hover:text-pink-900"
            data-dismiss-target="#badge-dismiss-pink"
            aria-label="Remove"
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
      </div>
    </aside>
  );
};

export default EndSidebar;
