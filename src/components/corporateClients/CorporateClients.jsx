import FormAdBlue from '../formAdBlue/FormAdBlue'
import styles from './CorporateClients.module.css'

const CorporateClients = () => {
  return (
    <section className={styles.section}>
      <div className={styles.columnLeft}>
        <h2 className={styles.title}>Для гуртових клієнтів  
          <span> від 3000 л</span>
        </h2>
        <ul className={styles.list}>
          <li className={styles.item}>Можливість доставки з нашою тарою</li>
          <li className={styles.item}>Відтермінування для постійних клієнтів</li>
          <li className={styles.item}>Найкраща ціна на ринку</li>
          <li className={styles.item}>Швидка логістика (1-2дні)</li>
        </ul>
      </div>
      <div className={styles.columnRight}>
        <div className={styles.wrapperRight}>
          <FormAdBlue />
        </div>
      </div>
      
    </section>
  )
}

export default CorporateClients
