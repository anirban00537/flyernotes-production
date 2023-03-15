import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Your website description goes here."
        />
        <meta
          name="keywords"
          content="note, flyernotes, flynotes, easy, note, taking, brain, clean, good, free"
        />
        <meta name="author" content="Anirban Roy" />
        <link rel="icon" href="/logo.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/logo.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/logo.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/logo.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <title>Flyernotes</title>
        <meta property="og:title" content="Flyernotes" />
        <meta
          property="og:description"
          content="Your website description goes here."
        />
        <meta property="og:image" content="/logo.png" />
        <meta property="og:url" content="https://flyernotes.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:flyernotes" content="flyernotes" />
        <meta
          property="twitter:description"
          content="Your website description goes here."
        />
        <meta property="twitter:image" content="/logo.png" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
