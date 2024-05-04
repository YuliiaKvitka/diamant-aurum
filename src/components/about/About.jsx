import Image from 'next/image'
import styles from './About.module.css'
import Img1x from './../../../public/about/img@1x.jpeg'
import Img2x from './../../../public/about/img@2x.jpeg'

const About = () => {
  return (
    <section className={styles.section}>
          <div className={styles.wrapper}>
            <div className={styles.wrapperLeft}>
                <h2 className={styles.title}>Про нас</h2>
                <p className={styles.text1}>Підприємство Diamant Aurum було засноване з єдиною метою, забезпечити клієнтів в B2B та B2C секторі, якісним продуктом, надавши найкращі умови та сервіс, для спільного розвитку  на висококонкурентному ринку.</p>
                <p className={styles.text2}>За рахунок системного підходу компанія постійно розширює штат та географію продажу.
                </p>
                <p className={styles.text3}>Засновник компанії:<br/> Івах Сергій Ярославович
                </p>
              </div>
              <div className={styles.wrapperRight}>
                  <Image src={Img1x} srcSet={Img2x} placeholder='blur' alt='' width={547} height={365}/>
              </div>
       </div>
    </section>
    )
}

export default About


