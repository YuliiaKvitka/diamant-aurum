import Image from 'next/image'
import styles from './Logo.module.css'
import Img1x from './../../../public/logo/logo-white@1x.png'
import Img2x from './../../../public/logo/logo-white@2x.png'
import Link from 'next/link'

const Logo = () => {
  return (
    <div className={styles.logo}>
      <Link href='/'><Image src={Img1x} srcSet={Img2x} alt=''/></Link>
    </div>
  )
}

export default Logo
