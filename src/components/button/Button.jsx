import Link from 'next/link'
import styles from './Button.module.css'

const Button = ({color, title1, title2, border}) => {
  return (
    <div className={styles.button}>
          <Link href='##'>
              <div style={{ backgroundColor: `${color}`}} className={styles.btn}>
              <span className={styles.span1}>{title1}</span>
              
              <span className={styles.span2}>{title2}</span></div>
          </Link>
    </div>
  )
}

export default Button
