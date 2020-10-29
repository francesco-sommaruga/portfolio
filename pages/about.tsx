import Head from 'next/head'
import { PageLayout } from "../components/PageLayout/PageLayout";

export default function Home() {
  return (
    <div>
      <Head>
        <title>About - Francesco Sommaruga</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <PageLayout />
      
    </div>
  )
}