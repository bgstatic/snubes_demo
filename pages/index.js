import Head from 'next/head'
import dynamic from "next/dynamic";
import Features from '../sections/Features/'
import WhySnubes from '../sections/WhySnubes/'

const Layout = dynamic(() => import("../components/Layout"), { ssr: false });


export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Snubes Demo</title>
        <meta name="description" content="Snubes Demo" />
        <link rel="icon" href="/snubes.ico" />
      </Head>
      <Features />
      <WhySnubes />
    </Layout>
  )
}
