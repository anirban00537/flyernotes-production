import Head from "next/head";
import { useState } from "react";
import Loading from "../Loading";
import SidebarComponent from "@/components/sidebar";
import useAutoCollapseSidebar from "@/state/hooks/common.hook";

type LayoutProps = {
  children: React.ReactNode;
  title?: string;
};

const DocumentLayout = ({ children, title = "Flyernotes" }: LayoutProps) => {
  // const { loading } = useCheckAuthState();

  const { sidebarCollapsed, toggleSidebar } = useAutoCollapseSidebar(1350);

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="flex">
        {!sidebarCollapsed ? (
          <div className={`${"w-64"} transition-all duration-300 ease-in-out`}>
            <SidebarComponent />
          </div>
        ) : (
          ""
        )}

        <div className="flex w-full items-center justify-center">
          {children}
        </div>
        <button
          className="fixed bottom-5 right-5 bg-purple-500 text-white px-4 py-2 rounded-full shadow-md transition-all duration-300 ease-in-out hover:bg-purple-600 focus:outline-none"
          onClick={toggleSidebar}
        >
          {sidebarCollapsed ? ">" : "<"}
        </button>
      </div>
    </>
  );
};

export default DocumentLayout;
