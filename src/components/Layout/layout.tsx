import Head from "next/head";
import Loading from "../Loading";
import { useState } from "react";
type LayoutProps = {
  children: React.ReactNode;
  title?: string;
};

export default function Layout({
  children,
  title = "Flyernotes",
}: LayoutProps) {
  const [loading, setLoading] = useState(false);

  return loading ? (
    <Loading />
  ) : (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      {children}
    </>
  );
}
