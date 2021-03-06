import React from 'react';
import clsx from 'clsx';

import styles from './programs.module.scss';
import ProgramsContent from './ProgramsContent/ProgramsContent';

const Programs:React.FC = (): JSX.Element => {
    return (
        <div className={clsx(styles.programsWrap, 'wrap')}>
            <div className={clsx(styles.container, 'container')}>
                <section className={styles.title}>
                    <h4>Our Best Programs</h4>
                    <div className={clsx(styles.titleUnderline, 'underline')}></div>
                </section>
                <section className={styles.description}>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Porttitor scelerisque nisl .</p>
                </section>
                <section className={styles.programsContent}>
                    <ProgramsContent />
                </section>
            </div>
            
        </div>
    )
}

export default Programs;