import React from 'react'
import Logo from './Logo/Logo'
import Menu from './Menu/Menu'
import ContentLeft from './ContentLeft/ContentLeft'
import ContentRight from './ContentRight/ContentRight'
import Review from './Review/Review'
import styles from './header.module.scss'
import clsx from 'clsx'

const Header: React.FC = (): JSX.Element => {
    return (
        <div className={styles.headerWrap}>
            <div className={clsx(styles.container, 'container')}>
                <header className={styles.headerNav}>
                    <section className={styles.logo}>
                        <Logo />
                    </section>
                    <nav className={styles.menu}>
                        <Menu />
                    </nav>
                </header>

                <div className={styles.content}>
                    <section className={styles.left}>
                        <ContentLeft />
                    </section>
                    <section className={styles.right}>
                        <ContentRight />
                    </section>
                </div>                      
            </div>
            <div className={styles.reviewWrap}>
                <Review />
            </div>
        </div>
    )
}

export default Header;