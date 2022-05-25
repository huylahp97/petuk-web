import React from 'react'
import styles from './contentLeft.module.scss'
import {BsPlayFill} from 'react-icons/bs'

const ContentLeft: React.FC = (): JSX.Element => {
    return (
        <>
            <div className={styles.slogan}>
                <h2>Make your <span>healthy day</span> with Petuk</h2>
            </div>
            <div className={styles.description}>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Porttitor scelerisque nisl neque a, tristique libero blandit quam. 
                    Odio sed tellus phasellus pellentesque.
                </p>
            </div>
            <div className={styles.btnWrap}>
                <button className={styles.primaryBtn}>Get Started</button>
                <button>
                    <i><BsPlayFill /></i>
                    <span>Watch Video</span>
                </button>
            </div>
        </>
    )
}

export default ContentLeft