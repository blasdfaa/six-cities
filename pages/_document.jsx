import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head />
      <link rel="preload" as="image" href="/img/sprite.svg" type="image/svg+xml" />
      <link rel="shortcut icon" href="/favicon.ico" />

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
