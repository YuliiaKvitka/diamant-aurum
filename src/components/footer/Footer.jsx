import ContactIcons from '../contactIcons/ContactIcons'
import styles from './Footer.module.css'

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.wrapper}>
        <div className={styles.columnLeft}>
          <h2 className={styles.title}>Контакти</h2>
          <address>
            <p className={styles.text}>М. Львів, смт. Брюховчичі, вул. Ясна  3</p>
            <p className={styles.text1}>067 888 08 97</p>
            <p className={styles.text1}> daurum21@gmail.com</p>
          </address>
          <div className={styles.contacts}>
            <ContactIcons/>
            {/* <p>Instagram</p>
            <p>067 888 08 97</p>
            <p>Facebook</p> */}
          </div>
        </div>
        <div className={styles.columnRight}>
          <iframe
              class={styles.footerMap}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10514016.78748909!2d19.5944620003159!3d49.95700403424663!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473adee5d8ca428d%3A0x3b27d1d2f65bb714!2z0LLRg9C70LjRhtGPINCv0YHQvdCwLCAzLCDQkdGA0Y7RhdC-0LLQuNGH0ZYsINCb0YzQstGW0LLRgdGM0LrQsCDQvtCx0LvQsNGB0YLRjCwgNzk0OTE!5e0!3m2!1suk!2sua!4v1714586552004!5m2!1suk!2sua" width={600} height={450} style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
        </div>
      </div>
      <div className={styles.footerBottom}> <p className={styles.copy}>Copiright</p></div>
    </div>
  )
}

export default Footer
