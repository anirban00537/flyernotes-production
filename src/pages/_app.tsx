import { AppProps } from 'next/app';
import '@/styles/index.css';
import { Provider } from 'react-redux';
import { store } from '@/state/store';
import Layout from '@/components/Layout/layout';
import { useEnablePresistance } from '@/database/firebase';
import { useEffect } from 'react';

export default function MyApp({ Component, pageProps }: AppProps) {
  useEnablePresistance();
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}
