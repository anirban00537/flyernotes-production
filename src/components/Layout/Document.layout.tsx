import Head from 'next/head';
import Loading from '../Loading';
import { useCheckAuthState } from '@/state/hooks/user.hook';
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
      <div className="flex">
        <SidebarComponent />
        <div className='flex w-full items-center justify-center'>{children}</div>
        {/* <EndSidebar /> */}
      </div>
    </>
  );
};

export default DocumentLayout;
