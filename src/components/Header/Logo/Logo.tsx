import React from 'react'
import logo from '../../../assets/images/header/Logo.png'
import styles from './logo.module.scss'

const Logo: React.FC = (): JSX.Element => {
    return (
        <>
            <img src={logo} alt="Petuk" className={styles.logo}/>
        </>
    )
}

export default Logo