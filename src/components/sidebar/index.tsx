import React from "react";
import { BiHomeAlt } from "react-icons/bi";
import NoteBookCollapse from "@/components/sidebar/NotebookCollaps";
import { useLogin } from "@/state/hooks/user.hook";
import { useSelector } from "react-redux";
import { RootState } from "@/state/store";

const SidebarComponent = () => {
  const { logout } = useLogin();
  const { notebooks } = useSelector((state: RootState) => state.notebooklice);
  return (
    <aside
      className={`height-full sticky top-0 h-screen border-r bg-white p-2 pt-0 w-80`}
      aria-label="Sidebar"
    >
      <div className="overflow-y-auto py-4 px-2 ">
        <ul className="space-y-2 pl-0">
          <NoteBookCollapse notebooks={notebooks} />
        </ul>
      </div>
      <div
        id="dropdown-cta"
        className="p-4 mt-6 rounded-lg bg-purple-50 dark:bg-purple-900"
        role="alert"
      >
        <div className="flex items-center mb-3">
          <span className="bg-blue-100 text-blue-800 text-sm font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-900">
            Beta
          </span>
          <button
            type="button"
            className="ml-auto -mx-1.5 -my-1.5 bg-purple-50 text-purple-900 rounded-lg focus:ring-2 focus:ring-purple-400 p-1 hover:bg-purple-200 inline-flex h-6 w-6 dark:bg-purple-900 dark:text-purple-400 dark:hover:bg-purple-800"
            data-dismiss-target="#dropdown-cta"
            aria-label="Close"
          >
            <span className="sr-only">Close</span>
            <svg
              aria-hidden="true"
              className="w-4 h-4"
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
          </button>
        </div>
        <p className="mb-3 text-sm text-purple-800 dark:text-purple-400">
          Preview the new Flowbite dashboard navigation! You can turn the new
          navigation off for a limited time in your profile.
        </p>
        <a
          className="text-sm text-purple-800 underline hover:text-purple-900 dark:text-purple-400 dark:hover:text-purple-300"
          href="#"
        >
          Turn new navigation off
        </a>
      </div>
      <button
        onClick={logout}
        className="p-2 bg-red-500 text-white rounded-lg mt-6"
      >
        Logout
      </button>
    </aside>
  );
};

export default SidebarComponent;
