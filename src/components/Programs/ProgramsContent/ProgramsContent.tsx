import React from 'react'
import {RiArrowRightSFill} from 'react-icons/ri'
import styles from './programsContent.module.scss'

import RECIPE_IMG from '../../../assets/images/programs/chef-hat2.png';
import MEALS_IMG from '../../../assets/images/programs/meals.png';
import LIFES_IMG from '../../../assets/images/programs/lifes2.png'

const list : {id: number, name: string, desc: string, img: string}[] = [
    {
        id: 1,
        name: 'Healthy Recipe',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        img: RECIPE_IMG,
    },
    {
        id: 2,
        name: 'Healthy Meals',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        img: MEALS_IMG,
    },
    {
        id: 3,
        name: 'Healthy Lifes',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        img: LIFES_IMG,
    },
];


const ProgramsContent: React.FC = (): JSX.Element => {
    return (
        <div className={styles.listWrap}>
            {list.map(item => (
                <article key={item.id} className={styles.program}>
                    <div className={styles.itemWrap}>
                        <div>
                            <img src={item.img} alt={item.name} className={styles.img}/>
                        </div>
                        <h5>{item.name}</h5>
                        <p>{item.desc}</p>
                        <a href="#">
                            <span>Learn more</span>
                            <i><RiArrowRightSFill /></i>
                        </a>
                    </div>
                </article>
            ))}
        </div>
    )
}

export default ProgramsContent;