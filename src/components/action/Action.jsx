'use client'
import styles from './Action.module.css'
// import Img1x from './../../../public/about/img@1x.jpeg'
// import Img2x from './../../../public/about/img@2x.jpeg'

import PhoneInput from '../phoneInput/PhoneInput'
import { useState } from 'react';
// import Timer from '../timer/Timer';
import CountdownTimer from '../countdownTimer/CountdownTimer';
import Image from 'next/image';
import Img11x from './../../../public/adblue/img1@1x.jpeg'
import Img12x from './../../../public/adblue/img1@2x.jpeg'
import Img21x from './../../../public/adblue/img2@1x.jpeg'
import Img22x from './../../../public/adblue/img2@2x.jpeg'
import Img31x from './../../../public/adblue/img3@1x.jpeg'
import Img32x from './../../../public/adblue/img3@2x.jpeg'
import Img41x from './../../../public/adblue/img4@1x.jpeg'
import Img42x from './../../../public/adblue/img4@2x.jpeg'
import SaveDataButton from '../saveDataButton/SaveDataButton';

const Action = () => {

   const [phone, setPhone] = useState('');
  return (
    <section className={styles.section}>
          <div className={styles.wrapper}>
        <div className={styles.wrapperLeft}>
          <div><Image src={Img11x} srcSet={Img12x} width={476} height={341} alt='' /></div>
          <div className={styles.miniImg}>
            <Image src={Img21x} srcSet={Img22x} width={154} height={105} alt='' />
            <Image src={Img31x} srcSet={Img32x} width={154} height={105} alt='' />
            <Image src={Img41x} srcSet={Img42x} width={154} height={105} alt='' />
          </div>
        </div>
        <div className={styles.wrapperRight}>
          <h2 className={styles.title}>Акція на AdBlue <span>- 25%</span></h2>
            <ul className={styles.list}>
              <li className={styles.item}><span className={styles.span1}>10 л</span><span className={styles.span2}>370 грн</span></li>
              <li className={styles.item}><span className={styles.span1}>20 л</span><span className={styles.span2}>780 грн</span></li>
              <li className={styles.item}><span className={styles.span1}>1000 л</span><span className={styles.span2}>19 000 грн</span></li>
              <li className={styles.item}><span className={styles.span1}>1к л </span><span className={styles.span2}>+ тара</span></li>
          </ul>
          <div className={styles.buying}>
            <div className={styles.block}><span className={styles.span3}>10 л  370 грн</span> <span className={styles.span4}>Ціна із знижкою - 25%</span></div>
            <div><button className={styles.btn}>Купити</button></div>
          </div>
          <div className={styles.buyingOneClick}>
            {/* <PhoneInput value={phone} onChange={setPhone} /> */}
            {/* <button className={styles.btnbuy}>Купити в один клік</button> */}
            <SaveDataButton  />
          </div>
            {/* <Timer /> */}
            <div className={styles.time}><CountdownTimer initialHours={59} initialMinutes={59} initialSeconds={59} initialMilliseconds={59} /> </div>
        
              </div>
              </div>
      </section>
    
    )
}

export default Action


