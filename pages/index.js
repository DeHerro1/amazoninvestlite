import Head from 'next/head'
import Form from '../components/Form/Form'
import Image from 'next/image';
import LandingPage from '../components/LandingPage/LandingPage'
import styles from '../styles/Home.module.css'
import Nav from '../components/Nav/Nav';
import InvestPage from '../components/FirstSection/InvestPage';
import Footer from '../components/Footer/Footer';

export default function Home() {
  return (
    <div className={styles.container}>
       <Nav />
       <InvestPage />
       <div className={styles.form}>
       <p className={styles.formHead}>Invest in Amazon</p>
         <Form />
        <p className={styles.formFooter}>To invest in Amazon you must be at least 18 years old. 
           Minimum required capital 250$</p>
           <div className={styles.icons}>
          {/* flat png from pngtree.com */}
          {/* <Image src="https://pngtree.com/so/flat" height="50" width="100" /> */}
        </div>
        </div>
        
        <div>
          <LandingPage />
        </div>
        <Footer />
    </div>
  )
}
