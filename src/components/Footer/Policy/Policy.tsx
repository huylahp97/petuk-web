import React, { ReactElement } from 'react'
import styles from './policy.module.scss'

const Policy: React.FC = (): ReactElement => {
    return (
        <div className={styles.policyWrap}>
            <article>
                <p>© Copyright 2022 <span>Petuk</span></p>
            </article>
            <article className={styles.policyLink}>
                <a href='#'>Privacy Policy</a>
                <a href='#'>Terms & Conditions</a>
            </article>
        </div>
    )
}

export default Policy;