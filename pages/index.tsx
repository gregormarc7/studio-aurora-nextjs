import Head from 'next/head'
import Hero from '../components/Hero'
import SectionIzola from '../components/SectionIzola'
import SectionApartma from '../components/SectionApartma'
import SectionLokacija from '../components/SectionLokacija'
import SectionPovprasevanje from '../components/SectionPovprasevanje'
import Header from '../components/Header'

export default function Home() {
  return (
    <>
      <Head>
        <title>Studio Aurora – Izola</title>
        <meta name="description" content="Sodoben apartma v Izoli – Studio Aurora" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main>
        <Hero />
        <SectionApartma />
        <SectionIzola />
        <SectionLokacija />
        <SectionPovprasevanje />
        </main>
    </>
  )
}
