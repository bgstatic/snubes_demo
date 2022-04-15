import dynamic from "next/dynamic";
import Hero from '../sections/Hero';
import Features from '../sections/Features/'
import WhySnubes from '../sections/WhySnubes/'
import Testimonials from '../sections/Testimonials';
import FrequentlyAskedQuestions from '../sections/FrequentlyAskedQuestions/';
import * as styles from '../styles/home.module.scss'

const Layout = dynamic(() => import("../components/Layout"), { ssr: false });

export default function Home() {

  return (
    <Layout>
      <Hero />
      <div className={styles.line}></div>
      <Features />
      <div className={styles.line}></div>
      <WhySnubes />
      <div className={styles.line}></div>
      <Testimonials />
      <div className={styles.line}></div>
      <FrequentlyAskedQuestions />
      <div className={styles.line}></div>
    </Layout>
  )
}
