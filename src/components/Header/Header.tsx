import React from 'react'
import Logo from './Logo/Logo'
import Menu from './Menu/Menu'
import ContentLeft from './ContentLeft/ContentLeft'
import ContentRight from './ContentRight/ContentRight'
import styles from './header.module.scss'

const Header: React.FC = (): JSX.Element => {
    return (
        <div className={styles.headerWrap}>
            <div className={styles.header}>
                <div className={styles.container}>
                    <header className={styles.headerNav}>
                        <div className={styles.logo}>
                            <Logo />
                        </div>
                        <nav className={styles.menu}>
                            <Menu />
                        </nav>
                    </header>

                    <div className={styles.content}>
                        <section className={styles.left}>
                            <ContentLeft />
                        </section>
                        <section>
                            <ContentRight />
                        </section>
                    </div>

                    <div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;