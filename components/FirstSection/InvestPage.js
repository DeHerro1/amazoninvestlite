import React from 'react';
import Image from 'next/image';
import styles from '../../styles/InvestPage.module.css';

const InvestPage = () => {
    return (
        <div className={styles.firstSection}>
          <div className={styles.firstSectionContainer}>
         <section className={styles.image}>
            <img
              src="/landingimage.png" className={styles.investImage} />
         </section>
         <section className={styles.firstSectionTexts}>
           <p className={styles.invest}>INVEST IN THE BEST:</p>
           <p className={styles.amazon}>AMAZON</p>
           <p className={styles.investNow}>INVEST NOW</p>
         </section>
         </div>
       </div>
    )
}

export default InvestPage;