import '../styles/globals.scss'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Snubes Demo</title>
        <meta name="description" content="Snubes Demo" />
        <link rel="icon" href="/snubes.ico" />
        <link
          rel="prefetch"
          href={"/images/sections/Hero/hero-background.webp"}
          as="image"
        />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
