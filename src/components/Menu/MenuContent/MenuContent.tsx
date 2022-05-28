import React from 'react'
import {FiArrowRight} from 'react-icons/fi'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';

import "swiper/css";
import 'swiper/scss/pagination';

import styles from './menuContent.module.scss'
import './swiper.scss'
import IMG_PIZZA from '../../../assets/images/menu/pizza.png'
import IMG_BURGER from '../../../assets/images/menu/burger.png'
import IMG_CHICKEN from '../../../assets/images/menu/chicken.png'
import IMG_SALAD from '../../../assets/images/menu/salad.png'
import { isTemplateExpression } from 'typescript'

const list: {id: number, img: string, name: string, price: number}[] = [
    {
        id: 1,
        img: IMG_PIZZA,
        name: 'Italian Pizza',
        price: 25.5,
    },
    {
        id: 2,
        img: IMG_BURGER,
        name: 'American Burger',
        price: 8.5,
    },
    {
        id: 3,
        img: IMG_SALAD,
        name: 'Ceasar Salad',
        price: 5,
    },
    {
        id: 4,
        img: IMG_CHICKEN,
        name: 'Chicken Leg',
        price: 12.5,
    },
    {
        id: 5,
        img: IMG_PIZZA,
        name: 'Italian Pizza',
        price: 25.5,
    },
    {
        id: 6,
        img: IMG_BURGER,
        name: 'American Burger',
        price: 8.5,
    },
    {
        id: 7,
        img: IMG_SALAD,
        name: 'Ceasar Salad',
        price: 5,
    },
    {
        id: 9,
        img: IMG_CHICKEN,
        name: 'Chicken Leg',
        price: 12.5,
    },
]


const MenuContent = () => {
    return (
        <div className={styles.menuWrap}>
            <Swiper
                // install Swiper modules
                modules={[Pagination]}
                spaceBetween={30}
                slidesPerView={3}
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
            >
                {list.map(item => {
                    return (
                        <SwiperSlide key={item.id} className={styles.itemWrap}>
                            <div className={styles.itemImg}>
                                <img src={item.img} alt={item.name} />
                            </div>
                            <div className={styles.infoWrap}>
                                <div className={styles.itemInfo}>
                                    <h5>{item.name}</h5>
                                    <p><span>$ </span>{item.price.toFixed(2)}</p>
                                </div>
                                <div className={styles.itemBtn}>
                                    <a href='#'>
                                        <span>Try now</span>
                                        <i><FiArrowRight /></i>
                                    </a>
                                </div>
                            </div>
                        </SwiperSlide>
                    )}
                )}
            </Swiper>
        </div>
    )
}

export default MenuContent;