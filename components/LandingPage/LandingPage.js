import React from 'react';
import style from '../../styles/LandingPage.module.css';
import Card from './Card/Card';

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

        </div>
    )
}

export default LandingPage;
