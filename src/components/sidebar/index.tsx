import { RootState } from "@/state/sthttps://itechsoft.vercel.app/
ore";
import React, { useState } from "react";
import Link from "next/link";
import { BiChevronDown } from "react-icons/bi";
import { BsJournalBookmarkFill } from "react-icons/bs";
import { BiLabel } from "react-icons/bi";

import { GrDocumentNotes } from "react-icons/gr";

import { TfiSettings } from "react-icons/tfi";
import { useSelector } from "react-redux";
import Badge from "../Editor/EditorHeader/badge";

const SidebarComponent = () => {
  const { user } = useSelector((state: RootState) => state.userSlice);
  const { labels } = useSelector((state: RootState) => state.notesSlice);
  const [currentMenu, setCurrentMenu] = useState<string>("");
  const toggleMenu = (value: string) => {
    setCurrentMenu((oldValue) => {
      return oldValue === value ? "" : value;
    });
  };
  return (
    <aside className="flex flex-col w-64 height-full sticky top-0 h-screen px-5 py-3 overflow-y-auto bg-white border-r rtl:border-r-0 rtl:border-l dark:bg-gray-900 dark:border-gray-700">
     
      <div className="flex flex-col justify-between flex-1 mt-6">
        <nav className="flex-1 -mx-3 space-y-3">
          <Link href="/dashboard">
            <div className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700">
              <GrDocumentNotes />
              <span className="mx-2 text-sm font-medium">Notes</span>
            </div>
          </Link>
          <Link href="/dashboard">
            <div className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700">
              <BsJournalBookmarkFill />
              <span className="mx-2 text-sm font-medium">Journal</span>
            </div>
          </Link>
          <Link href="/dashboard">
            <div className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700">
              <TfiSettings />
              <span className="mx-2 text-sm font-medium">Settings</span>
            </div>
          </Link>
          <Link href="">
            <div
              className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
              onClick={() => toggleMenu("labels")}
            >
              <BiLabel />
              <span className="mx-2 text-sm font-medium">Labels</span>
            </div>
          </Link>
          <div className="flex flex-wrap px-3">
            {labels?.map((label: any) => (
              <Badge title={label?.title} cross={false} />
            ))}
          </div>
        </nav>
        <div className="mt-6">
          <div className="p-3 bg-gray-100 rounded-lg dark:bg-gray-800">
            <h2 className="text-sm font-medium text-gray-800 dark:text-white">
              New feature availabel!
            </h2>
            <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
              harum officia eligendi velit.
            </p>
            <img
              className="object-cover w-full h-32 mt-2 rounded-lg"
              src="https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1806&q=80"
              alt="Feature"
            />
          </div>
          <div className="flex items-center justify-between mt-6">
            <a href="#" className="flex items-center gap-x-2">
              <img
                className="object-cover rounded-full h-7 w-7"
                src="https://overreacted.io/static/profile-pic-c715447ce38098828758e525a1128b87.jpg"
                alt="avatar"
              />
              <span className="text-sm font-medium text-gray-700 dark:text-gray-200">
                {user?.first_name} {user?.last_name}
              </span>
            </a>
            <a
              href="#"
              className="text-gray-500 transition-colors duration-200 rotate-180 dark:text-gray-400 rtl:rotate-0 hover:text-blue-500 dark:hover:text-blue-400"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
                className="h-5 w-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default SidebarComponent;
