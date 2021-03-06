import Head from 'next/head'
import { PageLayout } from "../components/PageLayout/PageLayout";
import { Grid } from "../components/Grid/Grid";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Francesco Sommaruga</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <PageLayout>
        <Grid />
      </PageLayout>
      
    </div>
  )
}
