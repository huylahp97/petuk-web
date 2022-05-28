import React from 'react'

import styles from './footer.module.scss'

const list: {header: string, nav: string[]}[] = [
    {
        header: "About",
        nav: ["About us", "Features", "News & Blog"],
    },
    {
        header: "Movement",
        nav: ["What Petuk", "Support us"],
    },
    {
        header: "Company",
        nav: ["Why Petuk", "Capital", "Security"],
    },
    {
        header: "Support",
        nav: ["FAQs", "Support Center", "Contact us"],
    },
    
]

const FooterNav: React.FC = (): JSX.Element => {
    return (
        <div className={styles.footerNavWrap}>
            {list.map(({header, nav}, index) => (
                <article key={index}>
                    <h6>{header}</h6>
                    <ul>
                        {nav.map((navItem, index)=> (
                            <li key={index}>
                                <a href='#'>{navItem}</a>
                            </li>
                        ))}
                    </ul>
                </article>
            ))
            }
        </div>
    )
}

export default FooterNav