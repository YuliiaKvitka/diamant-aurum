import Image from 'next/image'
import styles from './Information.module.css'
import Img51x from './../../../public/adblue/img5@1x.jpeg'
import Img52x from './../../../public/adblue/img5@2x.jpeg'
import Img61x from './../../../public/adblue/img6@1x.jpeg'
import Img62x from './../../../public/adblue/img6@2x.jpeg'
import Img71x from './../../../public/adblue/img7@1x.jpeg'
import Img72x from './../../../public/adblue/img7@2x.jpeg'

const Information = () => {
  return (
    <section className={styles.section}>
        <div className={styles.wrapper}>
            <ul className={styles.list}>
                <li className={styles.item}>
                    <h5 className={styles.titleItem}>AdBlue - (виробник Польща)</h5>
                    <p className={styles.text}>AdBlue це рідкий реагент, що використовується для очищення вихлопних газів дизельних двигунів стандарту Євро 5 та Євро 6. Використовується в сучасних дизельних двигунах з системою каталітичної нейтралізації SCR (Selective Catalytic Reduction).</p>
                </li>
                <li className={styles.item}>
                    <h5 className={styles.titleItem}>Який розхід AdBlue?</h5>
                    <p className={styles.text}>Розхід реагентума напряму залежать від манери водіння, робочої температури системи або температури повітря. Автомобілі в середньому споживають 1,5-2,5 л. AdBlue на 100 км.</p>
                </li>
                <li className={styles.item}>
                    <h5 className={styles.titleItem}>Що буде, якщо не використовувати AdBlue?</h5>
                    <p className={styles.text}>Приблизно на 30-40% буде знижено потужність двигуна, і, як наслідок, впаде тяга і може трохи підвищиться витрата палива. Їзда стане некомфортною та неекономною. Важливо розуміти, що саме собою наявність чи відсутність реагенту Адблю впливає потужність чи витрата палива.</p>
                </li>
            </ul>
            <h2 className={styles.title}>А Ви знали, що з AdBlue ...</h2> 
            <div className={styles.blockImg}>
                  <div className={styles.img1}>
                      <h5 className={styles.titleItem1}>Зниження витрати палива на 6%в залежності від стилю водіння</h5>
                  </div>
                  <div className={styles.img2}>
                      <h5 className={styles.titleItem1}>Зниження податків і дорожніх зборів в Європі</h5>
                  </div>
                  <div className={styles.img3}>
                       <h5 className={styles.titleItem1}>Турбується за екологію зменшуючи шкідливі викиди</h5>
                </div>
                  
                
                  
              </div>  
        </div>
    </section>
  )
}

export default Information
