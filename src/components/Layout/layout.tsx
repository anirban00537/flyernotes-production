import Head from "next/head";
import Loading from "../Loading";
import { useState } from "react";
import { useCheckAuthState } from "@/hooks/authentication.hook";
type LayoutProps = {
  children: React.ReactNode;
  title?: string;
};

export default function Layout({
  children,
  title = "Flyernotes",
}: LayoutProps) {
  const { isLoading } = useCheckAuthState();
  return isLoading ? (
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
