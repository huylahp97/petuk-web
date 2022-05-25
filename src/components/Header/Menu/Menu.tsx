import React from 'react'
import {FiArrowRight} from 'react-icons/fi'
import styles from './menu.module.scss'

const Menu: React.FC = (): JSX.Element => {
    const menu: string[] = [
        "Home",
        "Product",
        "Customeers",
        "Pricing",
        "Docs",
    ]
    return (
        <ul className={styles.ulMenu}>
            {menu.map(item => (
                <li>
                    <a className={styles.menuBtn} href='#'>{item}</a>
                    <div className={styles.menuUnderline}></div>
                </li>
            ))}
            <li>
                <a href="#" className={styles.signInBtn}>
                    <span>Sign In</span> 
                    <i><FiArrowRight /></i>
                    </a>
            </li>
        </ul>
    )
}

export default Menu