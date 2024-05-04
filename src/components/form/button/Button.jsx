import styles from './Button.module.css'

const Button = ({width, height}) => {
  return (
    // <button type='submit' style={{ width: `${width}px`, height: `${height}px` }} className={styles.btn}>Стати партнером</button>
    <button type='submit' style={{ width: `${width}px`, height: `${height}px` }} className={styles.button}>Стати партнером</button>
   
  )
}

export default Button
