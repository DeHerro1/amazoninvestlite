import React from 'react';
import Image from 'next/image';
import styles from '../../styles/Footer.module.css';

const Footer = () => {
    return (
        <div className={styles.footer}>
            <Image src="/lite.svg" width="100"
                height="30" />
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
        </div>
    )
}

export default Footer;
