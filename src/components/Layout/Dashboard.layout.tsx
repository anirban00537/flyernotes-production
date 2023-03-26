import Head from "next/head";
import SidebarComponent from "@/components/sidebar";
import useAutoCollapseSidebar from "@/state/hooks/common.hook";
import DrawerSidebar from "../sidebar/DrawerSidebar";

type LayoutProps = {
  children: React.ReactNode;
  title?: string;
};

export default function DashboardLayout({
  children,
  title = "Flyernotes",
}: LayoutProps) {
  //   const { loading } = useCheckAuthState();
  const { sidebarCollapsed, toggleSidebar } = useAutoCollapseSidebar(1350);

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className={`flex ${sidebarCollapsed && "flex-col"}`}>
        {!sidebarCollapsed ? (
          <div className={` transition-all duration-300 ease-in-out`}>
            <SidebarComponent />
          </div>
        ) : (
          <DrawerSidebar />
        )}
        {children}
      </div>
    </>
  );
}
