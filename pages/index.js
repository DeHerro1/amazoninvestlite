import Head from 'next/head'
import Form from '../components/Form/Form'
import Image from 'next/image';
import LandingPage from '../components/LandingPage/LandingPage'
import styles from '../styles/Home.module.css'
import Nav from '../components/Nav/Nav';
import InvestPage from '../components/FirstSection/InvestPage';
import Footer from '../components/Footer/Footer';
import { useEffect, useState } from 'react';

export default function Home({countryInfo}) {
  const [countryDatas, setCountryDatas] = useState([]);

  useEffect(() => {
    return setCountryDatas(countryInfo);
  },[])
  
  return (
    <div className={styles.container}>
       <Nav />
       <InvestPage />
       <div className={styles.form}>
       <p className={styles.formHead}>Invest in Amazon</p>
         <Form countryDatas={countryDatas} />
        <p className={styles.formFooter}>To invest in Amazon you must be at least 18 years old. 
           Minimum required capital 250$</p>
        <div className={styles.payments}>
            <div className={styles.icons}>

            </div>        
        </div>
        </div>
        
        <div>
          <LandingPage />
          <div className={styles.secondPayments}>
            <div className={styles.secondIcons}>
            </div>        
        </div>
        </div>
        <Footer />
    </div>
  )
}

export async function getStaticProps() {
  const res = await fetch('https://restcountries.eu/rest/v2/all');
  const posts = await res.json();
  let countryInfo = posts.map(post => {
    return {
      name: post.name,
      flag: post.flag,
      code: post.callingCodes
    }
  })
  return {
    props: {
      countryInfo,
      posts
    }
  }
}  