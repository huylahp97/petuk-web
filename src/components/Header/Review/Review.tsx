import React from 'react'
import styles from './review.module.scss'
import {AiFillStar} from 'react-icons/ai'
import IMG1 from '../../../assets/images/header/girl-1.png'
import IMG2 from '../../../assets/images/header/girl-2.png'
import IMG3 from '../../../assets/images/header/girl-3.png'

const listImage : {id: number, img: string}[] = [
    {
        id: 1,
        img: IMG1,
    },
    {
        id: 2,
        img: IMG2,
    },
    {
        id: 3,
        img: IMG3,
    },
]

const Review: React.FC = (): JSX.Element => {
    return (
        <section className={styles.reviewsAndRates}>
            <article className={styles.reviews}>
                <div>
                    <span>
                        <h3>Our Happy Customers</h3>
                        <p>(12.5k Reviews)</p>
                    </span>
                </div>
            </article>
            <article className={styles.customers}>
                <div>
                    {listImage.map(item => (
                        <img key={item.id} src={item.img} alt={`Customer ${item.id.toString()}`}/>
                    ))

                    }
                </div>
            </article>
            <article className={styles.rates}>
                <div>
                    <i><AiFillStar /></i>
                    <span>4.7</span>
                </div>
            </article>
        </section>
    )
}

export default Review