import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { PageLayout } from "../components/PageLayout/PageLayout";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Francesco Sommaruga</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <PageLayout />
      
    </div>
  )
}
