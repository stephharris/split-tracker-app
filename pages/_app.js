import Head from 'next/head'
import Nav from '../components/Nav'

import '../styles.scss'

export default function App({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>Split.Run - Calculating Running Track Splits and Paces</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          rel="preload"
          href="/fonts/Syne/Syne-Bold.otf"
          as="font"
          crossOrigin=""
        />
      </Head>

      <Nav />
      <Component {...pageProps} />
    </div>
  )
}