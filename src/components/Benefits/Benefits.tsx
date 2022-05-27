import React from 'react'
import clsx from 'clsx'

import styles from './benefits.module.scss'

const Benefits = () => {
    return (
        <div className={clsx(styles.benefitsWrap, 'wrap')}>
            <div className={clsx(styles.container, 'container')}>
                <section className={styles.title}>
                    <h4>Our Value Top Help You</h4>
                    <div className={clsx(styles.titleUnderline, 'underline')}></div>
                </section>
                <section className={styles.description}>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Porttitor scelerisque nisl .</p>
                </section>
                <section className={styles.benefitsContent}></section>
            </div>
        </div>
    )
}

export default Benefits