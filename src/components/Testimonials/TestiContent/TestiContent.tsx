import React from 'react'
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import styles from './testiContent.module.scss'
import './swiper.scss'
import IMG_CUSTOMER from '../../../assets/images/testimonials/customer.png'

const list: {id: number, img: string, name: string, comment: string, address: string}[] = [
    {
        id: 1,
        img: IMG_CUSTOMER,
        name: 'Melissa Carson',
        comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sagittis non augue elementum vehicula id. Urna vulputate nunc aliquet sapien. Sagittis non augue elementum vehicula id. Urna vulputate nunc aliquet sapien.',
        address: 'Alexandria, LA',
    },
    {
        id: 2,
        img: IMG_CUSTOMER,
        name: 'Melissa Carson 2',
        comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sagittis non augue elementum vehicula id. Urna vulputate nunc aliquet sapien. Sagittis non augue elementum vehicula id. Urna vulputate nunc aliquet sapien.',
        address: 'Alexandria, LA',
    },
    {
        id: 3,
        img: IMG_CUSTOMER,
        name: 'Melissa Carson 3',
        comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sagittis non augue elementum vehicula id. Urna vulputate nunc aliquet sapien. Sagittis non augue elementum vehicula id. Urna vulputate nunc aliquet sapien.',
        address: 'Alexandria, LA',
    },
]

const TestiContent: React.FC = (): JSX.Element => {
    return (
        <Swiper 
            className={styles.testiContentWrap}
            modules={[Navigation, Pagination]}
            spaceBetween={90}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
        >
            {list.map(item => {
                return (
                    <SwiperSlide key={item.id} className={styles.itemWrap}>
                        <article>
                            <div className={styles.imgWrap}>
                                <img src={item.img} alt={item.name} />
                            </div>
                            <div className={styles.commentWrap}>
                                <div className={styles.comment}>
                                    <p>{item.comment}</p>
                                </div>
                                <div className={styles.info}>
                                    <h6>{item.name}</h6>
                                    <p>{item.address}</p>
                                </div>
                            </div>
                        </article>
                    </SwiperSlide>
                )
            })
            }
        </Swiper>
    );
}

export default TestiContent;