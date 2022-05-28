import React from 'react'

import styles from './subscribe.module.scss'

const Subscribe = () => {
    return (
        <div className={styles.subscribeContent}>
            <article className={styles.title}>
                <h3>Subscribe Our Newsletter</h3>
            </article>
            <article className={styles.description}>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sagittis non augue elementum vehicula id. Urna vulputate nunc aliquet sapien.</p>
            </article>
            <article className={styles.subscribe}>
                <form>
                    <span>
                        <input type='text' placeholder='Type your email here' />
                    </span>
                    <button type='submit'>Subscribe</button>
                </form>
            </article>
        </div>
    )
}

export default Subscribe