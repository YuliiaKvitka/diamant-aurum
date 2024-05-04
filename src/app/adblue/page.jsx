import Head from 'next/head'
import HeroAdBlue from '@/components/heroAdBlue/HeroAdBlue'
import Action from '@/components/action/Action'
import AdvantagesAdBlue from '@/components/action/advantagesAdBlue/AdvantagesAdBlue'
import Information from '@/components/information/Information'
import CorporateClients from '@/components/corporateClients/CorporateClients'
import Rules from '@/components/rules/Rules'

const AdBlue = () => {
  return (
   
      <>
        <Head>
          <title>AdBlue-Діамант Аурум</title>
        <link rel="canonical" href="http://localhost:3000/adblue" />
      </Head>
      <main>
        <HeroAdBlue />
        <Action />
        <AdvantagesAdBlue />
        <Information />
        <CorporateClients />
        <Rules/>
      </main>
      </>
  )
}

export default AdBlue
