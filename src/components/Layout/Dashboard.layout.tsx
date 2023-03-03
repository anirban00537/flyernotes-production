import Head from 'next/head';
import SidebarComponent from '@/components/Sidebar';
import EndSidebar from '@/components/AlterSidebar';

type LayoutProps = {
  children: React.ReactNode;
  title?: string;
};

export default function DashboardLayout({
  children,
  title = 'Flyernotes',
}: LayoutProps) {
  //   const { loading } = useCheckAuthState();

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="flex">
        <SidebarComponent />
        {children}
        {/* <EndSidebar /> */}
      </div>
    </>
  );
}
