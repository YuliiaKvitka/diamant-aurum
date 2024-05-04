import HeroButton from '../heroButton/HeroButton'
import Offer from '../offer/Offer'
import styles from './HeroAdBlue.module.css'
import Img11x from './../../../public/adblue-bg/icon1@1x.png'
import Img12x from './../../../public/adblue-bg/icon1@2x.png'
import Img21x from './../../../public/adblue-bg/icon2@1x.png'
import Img22x from './../../../public/adblue-bg/icon1@2x.png'

import OfferAdBlue from '../offerAdBlue/OfferAdBlue'
import Button from '../button/Button'

const HeroAdBlue = () => {
  return (
    <section className={styles.section}>
      <div className={styles.wrapper}>
        <div className={styles.block}><h1 className={styles.title}>AdBlue</h1>
          <p className={styles.text}>Роздрібний та гуртовий продаж рідини для очищення дизельних вихлопних газів для євро 5 / 6
          </p>
        </div>
        <div className={styles.offers}>
          <OfferAdBlue src={Img11x} srcSet={Img12x} title='Найкраща ціна на ринку
'/>
          <OfferAdBlue src={Img21x} srcSet={Img22x} title='Швидка доставка'/>
         
        </div>
        <div className={styles.button}>
        <Button title1='Купити роздріб' title2='від 10 л' color='rgb(214, 11, 81)'/>
        <Button title1='Купити гуртом' title2='від 3000 л по спец ціні' color='rgb(35, 35, 49);' />
        </div> 
      </div>
    </section>
  )
}

export default HeroAdBlue
