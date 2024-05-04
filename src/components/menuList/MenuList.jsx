import styles from './MenuList.module.css'

const MenuList = () => {
  return (
      <ul className={styles.list}>
          <li className={styles.item}>Про Нас</li>
          <li className={styles.item}>Як ми працюємо</li>
          <li className={styles.item}>Наші клієнти</li>
          <li className={styles.item}>Продукти</li>
          <li className={styles.item}>Контакти</li>
      
    </ul>
  )
}

export default MenuList
