
import styles from './ContactIcons.module.css'
import Image from 'next/image';
import Ig from './../../../public/socialIcons/instagram.png'
import Fb from './../../../public/socialIcons/facebook.png'
import Ph from './../../../public/socialIcons/phone.png'
import Link from 'next/link';



const ContactIcons = () => {
    return (
        <div className={styles.container}>
            <div className={styles.listItem}>
                <Link href='##'><Image className={styles.facebook} src={Fb} width={48} height={48} alt='' /></Link>
                <span className={styles.listItemName}>Facebook</span>
            </div>
            <div className={styles.listItem}>
                <Link href='##'> <Image className='instagram' src={Ig} width={48} height={48} alt='' /></Link>
                <span className={styles.listItemName}>Instagram</span>
            </div>
            <div className={styles.listItem}>
                <Link href='tel:+380678880897'> <Image className={styles.phone} src={Ph} width={48} height={48} alt='' /></Link>
                <span className={styles.listItemName}>Зателефонувати</span>
            </div>

        </div>

    );
};

export default ContactIcons;