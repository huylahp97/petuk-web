import React from 'react';
import clsx from 'clsx';

import styles from './menu.module.scss'
import MenuContent from './MenuContent/MenuContent';

const Menu: React.FC = (): JSX.Element => {
    return (
        <div className={clsx(styles.menuWrap, 'wrap')}>
            <div className={clsx(styles.container, 'container')}>
                <section className={styles.title}>
                    <h4>Try Our Healthy Menu</h4>
                    <div className={clsx(styles.titleUnderline, 'underline')}></div>
                </section>
                <section className={styles.description}>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Porttitor scelerisque nisl .</p>
                </section>
                <section className={styles.menuContent}>
                    <MenuContent />
                </section>
            </div>
        </div>
    )
};

export default Menu;