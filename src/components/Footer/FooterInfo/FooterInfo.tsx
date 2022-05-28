import React from 'react'
import styles from './footerInfo.module.scss'
import {FaFacebookF, FaInstagram, FaTwitter, FaYoutube} from 'react-icons/fa'


import IMG_LOGO from '../../../assets/images/footer/Logo.png'

const FooterInfo: React.FC = (): JSX.Element => {
    return (
        <article className={styles.infoWrap}>
            <div className={styles.logo}>
                <img src={IMG_LOGO} alt="PETUK" />
            </div>
            <div className={styles.message}>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Porttitor scelerisque nisl neque a.
                </p>
            </div>
            <div className={styles.socials}>
                <button type='button' className={styles.facebook}>
                    <i><FaFacebookF /></i>
                </button>
                <button type='button' className={styles.instagram}>
                    <i><FaInstagram /></i>
                </button>
                <button type='button' className={styles.twitter}>
                    <i><FaTwitter /></i>
                </button>
                <button type='button' className={styles.youtube}>
                    <i><FaYoutube /></i>
                </button>
            </div>
        </article>
    );
}
export default FooterInfo;