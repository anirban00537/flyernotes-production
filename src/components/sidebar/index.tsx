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
      className={`height-full sticky top-0 h-screen border-r bg-purple-50 p-2 pt-0 w-80`}
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
          <span className="text-purple-800 text-sm font-semibold mr-2  py-0.5 rounded dark:bg-blue-200 dark:text-blue-900">
            Beta
          </span>
          <button
            type="button"
            className="ml-auto -mx-1.5 -my-1.5 bg-purple-50 text-purple-900 rounded-lg focus:ring-2 focus:ring-purple-400 p-1 hover:bg-purple-200 inline-flex h-6 w-6 dark:bg-purple-900 dark:text-purple-400 dark:hover:bg-purple-800"
            data-dismiss-target="#dropdown-cta"
            aria-label="Close"
          >
            <span className="sr-only">Close</span>
          </button>
        </div>
        <p className="mb-3 text-sm text-purple-800 dark:text-purple-400">
          The version of flyernotes you are using is still in development mode
          please feel free to give us suggetion for improvement
        </p>
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
