import React from "react";
import { BiHomeAlt } from "react-icons/bi";
import NoteBookCollapse from "@/components/sidebar/NotebookCollaps";
import { useLogin } from "@/state/hooks/user.hook";
import { useSelector } from "react-redux";
import { RootState } from "@/state/store";
import Link from "next/link";

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
          {/* <Link href="/all">
            <li>
              <a
                href="#"
                className="font-norma5 grou flex w-full  items-center rounded-lg p-1 pl-2 text-sm text-gray-800 transition duration-75"
              >
                <BiHomeAlt />
                <span className="ml-3 flex-1 whitespace-nowrap">All Notes</span>
              </a>
            </li>
          </Link> */}
          <NoteBookCollapse notebooks={notebooks} />
          <button onClick={logout}>Logout</button>
        </ul>
      </div>
    </aside>
  );
};

export default SidebarComponent;
