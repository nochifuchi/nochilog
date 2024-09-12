import { siteConfig } from '@/site.config';
import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <link rel="mask-icon" href="/favicon/favicon.svg" color="#5b787f" />
        <link rel="shortcut icon" href="/favicon/favicon.svg" type="image/svg+xml" />
        <meta name="theme-color" content="#5b787f" />
        <meta name="description" content={`${siteConfig.title} | ${siteConfig.description}`} />
        <meta property="og:site_name" content={siteConfig.title} />
        <meta property="og:url" content={siteConfig.url} />
        <meta property="og:image" content={siteConfig.ogImageUrl} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
