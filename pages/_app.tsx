import { TransitionProvider } from "@context/transition/TransitionProvider";
import React from "react";
import type { AppProps } from "next/app";
import Head from "next/head";
import "@styles/globals.css";

type ComponentWithPageLayout = AppProps & {
  Component: AppProps["Component"] & {
    PageLayout?: React.ComponentType;
  };
};

/**
 * The _app nextjs file.
 * @return {JSX.Element} The JSX code for every component in pages.
 */
function DiegosWebsite({
  Component,
  pageProps,
}: ComponentWithPageLayout): JSX.Element {
  return (
    <TransitionProvider>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300&family=Titillium+Web:wght@400;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      {Component.PageLayout ? (
        <Component.PageLayout>
          <Component {...pageProps} />
        </Component.PageLayout>
      ) : (
        <Component {...pageProps} />
      )}
    </TransitionProvider>
  );
}
export default DiegosWebsite;
