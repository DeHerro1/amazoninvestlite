import React from 'react';
import Image from 'next/image';
import styles from '../../styles/Home.module.css';

const Nav = () => {
    return (
        <nav className={styles.nav}>
            <Image
                src="/lite.svg"
                width="100"
                height="30"
                className={styles.navIcon}
                alt="image" />
       </nav>
    )
}

export default Nav;