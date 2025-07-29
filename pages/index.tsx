import Head from 'next/head'
import Hero from '../components/Hero'
import SectionIzola from '../components/SectionIzola'
import SectionApartma from '../components/SectionApartma'
import SectionLokacija from '../components/SectionLokacija'
import SectionPovprasevanje from '../components/SectionPovprasevanje'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>Studio Aurora Izola – Apartma ob morju za 2 osebi</title>
        <meta
          name="description"
          content="Studio Aurora je sodoben apartma za 2 osebi v Izoli. Uživajte v mirni lokaciji. Rezervirajte zdaj!"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />

        {/* Open Graph (Facebook, LinkedIn) */}
        <meta property="og:title" content="Studio Aurora Izola – Apartma ob morju za 2 osebi" />
        <meta
          property="og:description"
          content="Sodobno opremljen apartma za sproščen oddih v Izoli, z brezplačnim parkiriščem in majhno teraso."
        />
        <meta property="og:image" content="/images/og-preview.jpg" />
        <meta property="og:url" content="https://studio-aurora-izola.com/" />
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Studio Aurora Izola – Apartma ob morju za 2 osebi" />
        <meta
          name="twitter:description"
          content="Sodobno opremljen apartma za sproščen oddih v Izoli, z brezplačnim parkiriščem in majhno teraso."
        />
        <meta name="twitter:image" content="/images/og-preview.jpg" />

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
      <Footer />
    </>
  )
}
