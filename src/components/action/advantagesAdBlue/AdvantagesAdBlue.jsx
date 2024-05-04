
import styles from './AdvantagesAdBlue.module.css'
import Img11x from './../../../../public/adblue/fast-delivery@1x.png'
import Img12x from './../../../../public/adblue/fast-delivery@2x.png'
import Img21x  from './../../../../public/adblue/best-price@1x.png'
import Img22x from './../../../../public/adblue/best-price@2x.png'
import Img31x from './../../../../public/adblue/six-pack@1x.png'
import Img32x from './../../../../public/adblue/six-pack@2x.png'
import Img41x from './../../../../public/adblue/certificate@1x.png'
import Img42x from './../../../../public/adblue/certificate@2x.png'
import Image from 'next/image'

const AdvantagesAdBlue = () => {
  return (
    <section className={styles.section}>
      <div className={styles.wrapper}>
      <ul className={styles.listItems}>
          <li className={styles.item}><Image src={Img11x} srcSet={Img12x} width={60} height={60} alt='' /> <span>Доставка 1 - 2 дні</span></li>
                  <li className={styles.item}><Image src={Img21x } srcSet={Img22x } width={52} height={52} alt='' /><span>Вигідна  ціна</span></li>
                  <li className={styles.item}><Image src={Img31x } srcSet={Img32x } width={51} height={51} alt=''/><span>Даємо тару від 1000 л</span></li>
                  <li className={styles.item}><Image src={Img41x } srcSet={Img42x } width={50} height={50} alt='' /><span>Сертифікована продукція</span></li>
              </ul></div>
    </section>
  )
}

export default AdvantagesAdBlue
