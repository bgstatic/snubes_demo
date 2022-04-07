import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Layout from '../components/Layout/'
import Features from '../sections/Features/'
import WhySnubes from '../sections/WhySnubes/'

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
