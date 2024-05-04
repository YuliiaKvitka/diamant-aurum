import AdvantagesItem from '../advantagesItem/AdvantagesItem'
import styles from './Advantages.module.css'
import Img11x from './../../../public/advantages/img1@1x.png'
import Img12x from './../../../public/advantages/img1@2x.png'
import Img21x from './../../../public/advantages/img2@1x.png'
import Img22x from './../../../public/advantages/img2@2x.png'
import Img31x from './../../../public/advantages/img3@1x.png'
import Img32x from './../../../public/advantages/img3@2x.png'
import Img41x from './../../../public/advantages/img4@1x.png'
import Img42x from './../../../public/advantages/img4@2x.png'
// import Form from '../form/Form'
// import FormAdBlue from '../formAdBlue/FormAdBlue'
import FormAdvantages from '../formAdvantages/FormAdvantages'

const Advantages = () => {
  return (
      <section className={styles.section}>
          <div className={styles.wrapper}>
              <div className={styles.block}><h2 className={styles.title}>Чому обирають нас?</h2></div>
              <ul className={styles.listItems}>
                  <li><AdvantagesItem src={Img11x } srcSet={Img12x } width={58} height={60} title='Сертифікована продукція' /></li>
                  <li><AdvantagesItem src={Img21x } srcSet={Img22x } width={60} height={60} title='Можливе відтермінування' /></li>
                  <li><AdvantagesItem src={Img31x } srcSet={Img32x } width={58} height={61} title='Найкраща ціна на ринку' /></li>
                  <li><AdvantagesItem src={Img41x } srcSet={Img42x } width={74} height={47} title='Швидка логістика (1-2дні)' /></li>
              </ul>
          </div>
      <div className={styles.form}>
        {/* <Form /> */}
        <FormAdvantages/>
      </div>
      
    </section>
  )
}

export default Advantages
