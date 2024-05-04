import Email from '../email/Email'
import Logo from '../logo/Logo'
import MenuList from '../menuList/menuList'
// import Phone from '../phone/phone'

import styles from './Header.module.css'
import Call from './button/Call'

const Header = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapperLeft}>
        <Logo />
        <nav><MenuList/></nav>
      </div>
      <div className={styles.wrapperRight}>
       <div className={styles.block}>
          {/* <Phone /> */}
         <div className={styles.call}> <Call/></div>
          <div className={styles.email}><Email className={styles.email } /></div>
       </div>
      </div>
    </div>
  )
}

export default Header
