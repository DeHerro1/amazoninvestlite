import React from 'react';
import Image from 'next/image';
import styles from '../../styles/Footer.module.css';

const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.footerTop}>
                <div className={styles.footerLogoTop}>
                    <img src="/lite.svg" className={styles.footerLogo} />
                </div>
                
                <div className={styles.conditions}>
                    <p>Privacy Policy</p>
                    <p>Terms & Conditions</p>
                    <p>Contact us</p>
                </div>
                <p>
                Investlite is operated by Bayline Global World Ltd. 
                a company bearing registration number SC517838, having a registered office address at 69 Brunswick Street, 
                Edinburgh, United Kingdom and by Bayline Trading Ltd. a limited liability company incorporated under the laws of 
                Belize bearing company registration number 136374, having it's registered address at 5 Cork Street, Belize City, 
                Belize regulated by the Belize International Financial Services Commission (IFSC), 
                license number 000188/91.
                </p>
                <p>
                Due to regional restrictions, we can't offer services for US, Canada, and some more other residents.
                </p>
                <p>
                Payments are processed by Bayline Global World Ltd. on behalf of Bayline Trading Ltd.
                </p>
                <p>
                Risk Warning:
                </p>
                <p>
                Trading Forex and CFDs carries a high level of risk to your capital. 
                The trading may not be suitable for all investors, so please ensure that you fully understand the 
                risks involved, and seek independent advice if necessary taking into account your investment objectives and 
                level of experience. You should not risk more than you are prepared to lose. Please ensure that you read through our 
                and conditions of use carefully before making CFDs/Forex investments. 
                </p>
                <p className={styles.footerBottom}>
                    CFDs are complex instruments and come with a high risk of losing money rapidly due to leverage.
                    72% of retail investor accounts lose money when trading CFDs with this provider.
                    You should consider whether you understand how CFDs work and whether you can afford to take the high risk of losing your money.
                </p>
            </div>
        </div>
    )
}

export default Footer;
