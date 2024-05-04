import styles from './HeroButton.module.css'

const HeroButton = ({width, height, title}) => {
  return (
      <div style={{ width: `${width}px`, height:`${height}px`}} className={styles.button} >
     <h5 className={styles.btnTitle}> {title}</h5>
    </div>
  )
}

export default HeroButton
