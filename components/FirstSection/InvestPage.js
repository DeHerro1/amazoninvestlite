import React from 'react';
import Image from 'next/image';
import styles from '../../styles/InvestPage.module.css';

const InvestPage = () => {
    return (
            <div className={styles.firstSection}>
         <section className={styles.image}>
            <Image 
              src="/landingimage.png"
               height={220}
               width={180}
              layout="responsive"
              alt="investlite" />
         </section>
         <section className={styles.firstSectionTexts}>
           <p className={styles.invest}>INVEST IN THE BEST:</p>
           <p className={styles.amazon}>AMAZON</p>
           <p className={styles.investNow}>INVEST NOW</p>
         </section>
         {/* //alcest-investlite.com/static/common/../funnels/amz_info_4620_2_es_lat/images/payment-methods.png?v=45482 */}
       </div>
    )
}

export default InvestPage;