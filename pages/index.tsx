import Head from 'next/head'
import Hero from '../components/Hero'

export default function Home() {
  return (
    <>
      <Head>
        <title>Studio Aurora</title>
        <meta name="description" content="Sodoben apartma v Izoli – Studio Aurora" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero />
    </>
  )
}
