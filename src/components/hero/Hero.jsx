import HeroButton from '../heroButton/HeroButton'
import Offer from '../offer/Offer'
import styles from './Hero.module.css'
import Img11x from './../../../public/offers/dol@1x.png'
import Img12x from './../../../public/offers/dol@2x.png'
import Img21x from './../../../public/offers/time@1x.png'
import Img22x from './../../../public/offers/time@2x.png'
import Img31x from './../../../public/offers/sertifcat@1x.png'
import Img32x from './../../../public/offers/sertifcat@2x.png'
import Link from 'next/link'

const Hero = () => {
  return (
    <div className={styles.section}>
      <div className={styles.wrapper}>
        <div className={styles.block}><h1 className={styles.title}>Діамант Аурум</h1>
          <p className={styles.text}>Надійний постачальник дизельного палива, газу та AdBlue гуртом та в роздріб
          </p>
        </div>
        <div className={styles.offers}>
          <Offer src={Img11x} srcSet={Img12x} title='Найкращі цінові пропозиції'/>
          <Offer src={Img21x} srcSet={Img22x} title='Швидка доставка'/>
          <Offer src={Img31x } srcSet={Img32x} title='Сертифікована продукція'/>
        </div>
        <nav className={styles.button}>
          <HeroButton width={283} height={118} title='ДИЗПАЛИВО'/>
          <HeroButton width={286} height={118} title='Газ'/>
          <HeroButton width={286} height={118} title='95 - бензин'/>
         <Link href='/adblue'> <HeroButton width={283} height={118} title='AdBlue'/></Link>
        </nav>
      </div>
    </div>
  )
}

export default Hero
