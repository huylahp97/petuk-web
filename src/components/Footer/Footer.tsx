import React from 'react'
import clsx from 'clsx'

import styles from './footer.module.scss'
import FooterInfo from './FooterInfo/FooterInfo'
import FooterNav from './FooterNav/FooterNav'
import Policy from './Policy/Policy'

const Footer: React.FC = (): JSX.Element => {
    return (
        <div className={clsx(styles.footerWrap, 'wrap')}>
            <div className={clsx(styles.container, 'container')}>
                <footer className={styles.footer}>
                    <section className={styles.footerInfo}>
                        <FooterInfo />
                    </section>
                    <section className={styles.footerNav}>
                        <FooterNav />
                    </section> 
                </footer>
                <div className={styles.poclicyWrap}>
                    <Policy />
                </div>
            </div>
        </div>
    )
}

export default Footer