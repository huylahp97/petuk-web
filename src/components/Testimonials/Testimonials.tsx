import React from 'react'
import clsx from 'clsx'

import styles from './testimonials.module.scss'
import TestiContent from './TestiContent/TestiContent'
import Subscribe from './Subscribe/Subscribe'

const Testimonials: React.FC = (): JSX.Element => {
    return (
        <div className={clsx(styles.testiWrap, 'wrap')}>
            <div className={clsx(styles.container, 'container')}>
                <section className={styles.title}>
                    <h4>Testimonials About Us</h4>
                    <div className={clsx(styles.titleUnderline, 'underline')}></div>
                </section>
                <section className={styles.description}>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Porttitor scelerisque nisl .</p>
                </section>
                <section className={styles.testiContent}>
                    <TestiContent />
                </section>
                <section className={styles.subscribeWrap}>
                    <Subscribe />
                </section>
            </div>
        </div>
    )
}

export default Testimonials