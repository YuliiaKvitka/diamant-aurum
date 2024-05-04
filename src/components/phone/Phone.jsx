import Link from 'next/link'
import styles from './Phone.module.css'

const Phone = () => {
  return (
    <div className={styles.phone}>
      <Link href='tel:+380678880897'>067 888 08 97</Link>
    </div>
  )
}

export default Phone
