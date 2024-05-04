import Link from 'next/link'
import styles from './Email.module.css'

const Email = () => {
  return (
   
      <div className={styles.email}>
       <Link href="mailto:daurum21@gmail.com"> daurum21@gmail.com</Link>
      </div>
   
  )
}

export default Email
