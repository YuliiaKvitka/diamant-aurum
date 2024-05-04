import Image from 'next/image'
import styles from './AdvantagesItem.module.css'

const AdvantagesItem = ({title, src, srcSet, width, height}) => {
  return (
    <div className={styles.item}>
          <Image style={{width:`${width}px`, height:`${height}px`}} src={src} srcSet={srcSet} alt={title} />
          <p className={styles.text}>{title}</p>
    </div>
  )
}

export default AdvantagesItem
