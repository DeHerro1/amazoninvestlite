import React from 'react';
import styles from '../../styles/Home.module.css';

const Nav = () => {
    return (
        <nav className={styles.nav}>
            <div className={styles.navImage}>
                <img
                src="//alcest-investlite.com/static/common/images/header-logos/header-invlt-logo.svg?v=46789"
                className={styles.navIcon}
                alt="image" />
            </div>
            
       </nav>
    )
}

export default Nav;