import React from 'react';
import style from '../../styles/LandingPage.module.css';
import Card from './Card/Card';
import Image from 'next/image';

const LandingPage = () => {
    return (
        <div className={style.page}>
            <h2>Starting is easy. Get access to:</h2>
                <div className={style.cards}>
                    <Card 
                        icon='hiii'
                        text="Secure and regulated platform" />
                    <Card 
                    icon="hiii"
                    text="Earnings in your account in 24 hours" />
                    <Card 
                        text="Simple learning tools" 
                        icon="hii" />
                    <Card 
                        text="24 houre support and continuous assistance" 
                        icon="hiiii" />
                </div>
            <button className={style.toHome}>Discover how to profit from Amazon investment</button>
            <div>
                <p className={style.infoHead}>A true "trillionaire company"</p>
            <div className={style.pageDetails}>
                <section className={style.info}>
               
                    <p>
                    Amazon's market cap reached 1 trillion dollars in 2018. According to Bloomberg, 
                    Amazon could reach yearly gross revenues over $1 trillion by 2025.
                    </p>
                    <p>
                    With increasing market revenue, Amazon is the undisputed leader. 
                    Investors and people who participate in the Amazon model can continue to benefit from the development prospects for Amazon.
                    </p>
                </section>
                <section className={style.art_image}>
                    {/* image from investLite */}
                    <Image 
                        src="/art-image.jpg" 
                        width={200} 
                        height={120}
                        layout="responsive" />
                </section>
            </div>
            </div>
            <button className={style.toHome}>Discover how to profit from Amazon investment</button>
        </div>
    )
}

export default LandingPage;
