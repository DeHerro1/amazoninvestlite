import Head from 'next/head'
import Form from '../components/Form/Form'
import LandingPage from '../components/LandingPage/LandingPage'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
       <nav className={styles.nav}>
         <h2>investLite</h2>
       </nav>
       <div className={styles.firstSection}>
         <section className={styles.image}>
           {/* <img src='../public/landingimage.png' alt="image" /> */}
         </section>
         <section className={styles.firstSectionTexts}>
           <p className={styles.invest}>INVEST IN THE BEST:</p>
           <p className={styles.amazon}>AMAZON</p>
           <p className={styles.investNow}>INVEST NOW</p>
         </section>
       </div>
       <div className={styles.form}>
       <p className={styles.form_head}>Invest in Amazon</p>
         <Form />
        <p className={styles.form_footer}>To invest in Amazon you must be at least 18 years old. 
           Minimum required capital 250$</p>
        </div>
        <div className={styles.icons}></div>
        <div>
          <LandingPage />
        </div>
    </div>
  )
}
