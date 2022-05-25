import React from 'react'
import happyLady from '../../../assets/images/header/happy-lady.png'

import styles from './contentRight.module.scss'
const ContentRight: React.FC = (): JSX.Element => {
    return (
        <>
            <div className={styles.imgWrap}>
                <img src={happyLady} alt="Happy" />
            </div>
        </>
    )
}

export default ContentRight