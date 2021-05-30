import Head from 'next/head'

import '../styles.scss'

export default function App({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>Split.Run - Calculating Running Track Splits and Paces</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <h1>This page has a title 🤔</h1>
      <Component {...pageProps} />
    </div>
  )
}