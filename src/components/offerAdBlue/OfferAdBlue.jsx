import Image from 'next/image'
import styles from './OfferAdBlue.module.css'

const OfferAdBlue = ({src, srcSet, title}) => {
  return (
    <div className={styles.wrapper}>
          <Image src={src} srcSet={srcSet} alt={title}/>
          <p className={styles.text}>{title}</p>
    </div>
  )
}

export default OfferAdBlue
