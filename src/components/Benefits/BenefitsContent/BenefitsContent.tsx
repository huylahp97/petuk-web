import React from 'react'

import styles from './benefitsContent.module.scss'
import IMG_LADY from '../../../assets/images/benefits/benefit-lady.png'
import IMG_ENERGY from '../../../assets/images/benefits/energy-icon.png'
import IMG_HAPPIER from '../../../assets/images/benefits/happier-icon.png'
import IMG_HEALTHIER from '../../../assets/images/benefits/healthier-icon.png'
import IMG_WEIGHT from '../../../assets/images/benefits/weight-icon.png'

const list: {id: number, img: string, name: string, desc: string}[] = [
    {
        id: 1,
        img: IMG_HEALTHIER,
        name: 'Become Healthier',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
        id: 2,
        img: IMG_ENERGY,
        name: 'Increase Energy',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
        id: 3,
        img: IMG_WEIGHT,
        name: 'Controling Weight',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
        id: 4,
        img: IMG_HAPPIER,
        name: 'Become Happier',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
]

const BenefitsContent: React.FC = (): JSX.Element => {
    return (
        <div className={styles.benefitsWrap} >
            <article className={styles.benefitsPic}>
                <div className={styles.picWrap}>
                    <img src={IMG_LADY} alt="Benefits" />
                    <span className={styles.circleBg}>
                        <span className={styles.circleBg2}></span>
                    </span>
                    
                </div>
            </article>
            <article className={styles.benefitsList}>
                {list.map(item => (
                    <div key={item.id} className={styles.benefitsItem}>
                        <div className={styles.itemImg}>
                            <img src={item.img} alt={item.name} />
                        </div>
                        <div>
                            <h5>{item.name}</h5>
                        </div>
                        <div className={styles.itemDesc}>
                            <p>{item.desc}</p>
                        </div>
                    </div>
                ))}
            </article>
        </div>
    )
}

export default BenefitsContent;