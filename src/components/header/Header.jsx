import Email from './../../components/email/Email'
import Logo from './../../components/logo/Logo'
import MenuList from './../../components/menuList/MenuList'
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
