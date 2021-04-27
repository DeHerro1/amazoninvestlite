import Head from 'next/head'
import Form from '../components/Form/Form'
import LandingPage from '../components/LandingPage/LandingPage'
import styles from '../styles/Home.module.css'
import Nav from '../components/Nav/Nav';
import InvestPage from '../components/FirstSection/InvestPage';
import Footer from '../components/Footer/Footer';
import { useState } from 'react';

export default function Home({ sendInfo }) {

  return (
    <div className={styles.container}>
      <Head>
      {/* <link href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap" rel="stylesheet"> */}
        <style>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
<link href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap" rel="stylesheet" />
        </style>
      </Head>
       <Nav />
       <InvestPage />
         <Form countryInfo={sendInfo} />
        <div>
          <LandingPage />
        </div>
        <Footer />
        {/* https://restcountries.eu/rest/v2/all */}
    </div>
  )
}

export const getStaticProps = async () => {
  const res = await fetch('https://restcountries.eu/rest/v2/all')
  const countryInfo = await res.json();
  let sendInfo = countryInfo.map(info => {
    return {'flag': info.flag, 'name': info.name}
  })

  return {
    props: {
      sendInfo
    }
  }
}