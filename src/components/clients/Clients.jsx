import Image from 'next/image'
import styles from './Clients.module.css'
import Img1 from './../../../public/companies/wheat.svg'
import Img2 from './../../../public/companies/office-building.svg'
import Img3 from './../../../public/companies/truck.svg'
import Br11x from './../../../public/brands/brand1@1x.png'
import Br12x from './../../../public/brands/brand1@2x.png'
import Br21x from './../../../public/brands/brand2@1x.png'
import Br22x from './../../../public/brands/brand2@2x.png'
import Br31x from './../../../public/brands/brand3@1x.png'
import Br32x from './../../../public/brands/brand3@2x.png'

const Clients = () => {
  return (
    <section className={styles.section}>
      <div className={styles.wrapper}>
        <h2 className={styles.title}>Наші клієнти</h2>
        <div className={styles.companies}>
         <div className={styles.block}>
            <Image src={Img1} width={65} height={65} alt='' />
            <p className={styles.text}>АГРАРНИЙ СЕКТОР</p>
          </div>
          <div className={styles.block}>
            <Image src={Img2} width={65} height={65} alt='' />
            <p className={styles.text}>ВИРОБНИЧІ ПІДПРИЄМСТВА</p>
          </div>
           <div className={styles.block}>
            <Image src={Img3} width={81} height={81} alt='' />
            <p className={styles.text}>ТРАНСПОРТНІ КОМПАНІЇ</p>
         </div>
        </div>
        <div className={styles.brands}>

          <div className={styles.br}>
            <div className={styles.item}>
              <Image src={Br11x} srcSet={Br12x} alt='' />
            </div>
             <hr className={styles.hr} />
          </div>

           <div className={styles.br}>
          <div className={styles.item}>
            <Image src={Br21x} srcSet={Br22x} alt='' />
            </div>
            <hr className={styles.hr} />
          </div>

           <div className={styles.br}>
          <div className={styles.item}>
            <Image src={Br31x} srcSet={Br32x} alt='' />
            </div>
            <hr className={styles.hr} />
          </div>
          
        </div>
      </div>
      
    </section>
  )
}

export default Clients
