import styles from './Input.module.css'

const Input = ({title, width, height}) => {
  return (
    <div style={{width:`${width}px`, height:`${height}px`}} className={styles.form}>
      <input type="text" id="email" className={styles.form__input} autocomplete="off" placeholder=" " />
    
    <label for="email" className={styles.form__label}>{title}</label>
  </div>
  )
}

export default Input
