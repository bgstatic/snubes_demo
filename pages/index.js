import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Layout from '../components/Layout/'
import Features from '../sections/Features/'
import WhySnubes from '../sections/WhySnubes/'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Features />
        <WhySnubes />
      </Layout>
    </div>
  )
}
