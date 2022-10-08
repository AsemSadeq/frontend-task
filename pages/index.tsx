import type { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import { Home as HomeComponent } from '../src/components/Home'
import { ApiData } from '../src/Shared/interfaces'

const Home: NextPage<ApiData> = (props) => {
  return (
    <>
      <Head>
        <title>Search and list applications</title>
        <meta name="description" content="Search and list applications Logger" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomeComponent {...props} />
    </>
  )
}

export const getServerSideProps: GetServerSideProps<ApiData> = async () => {
  const res = await fetch(process.env.API_URL as string)
  const data: ApiData = await res.json()

  return { props: { ...data }}
}

export default Home
