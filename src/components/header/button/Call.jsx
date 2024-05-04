import Link from 'next/link'
import styles from './Call.module.css'
import classNames from 'classnames'

const Call = () => {
  return (
   <div className={styles.block}>
        <div className={classNames(styles.phone, styles.cta)}>Зателефонувати</div>
      <Link href='tel:+380678880897' className={classNames(styles.phone, styles.number)}>067 888 08 97</Link>
    
   </div>
  )
}

export default Call
