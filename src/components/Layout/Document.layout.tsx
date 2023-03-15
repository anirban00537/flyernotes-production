import Head from 'next/head';
import SidebarComponent from '@/components/sidebar';
type LayoutProps = {
  children: React.ReactNode;
  title?: string;
};
const DocumentLayout = ({ children, title = 'Flyernotes' }: LayoutProps) => {
  // const { loading } = useCheckAuthState();
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="grid grid-cols-12 gap-4">
        {/* <div className="col-span-2">
          <SidebarComponent />
        </div> */}
        <div className="col-span-12 flex items-center w-full justify-center">{children}</div>
      </div>
    </>
  );
};

export default DocumentLayout;
