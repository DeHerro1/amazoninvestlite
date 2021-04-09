import React, { useRef, useState } from 'react';
import {Link} from 'next/link';
import styles from '../../styles/Form.module.css';
import axios from 'axios';
import Image from 'next/image';


const Form = ({countryDatas}) => {
  const firstName = useRef();
  const lastName = useRef();
  const email = useRef();
  const areaCode = useRef();
  const phone = useRef();
  const [verify, setVerify] = useState(false);
  const [verifyfirst, setVerifyFirst] = useState(false);
  const [verifyLast, setVerifyLast] = useState(false);
  const [verifyEmail, setVerifyEmail] = useState(false);
  const [verifyPhone, setVerifyPhone] = useState(false);

  console.log(countryDatas);
  
  const verification = (first, last, email, phone) => {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let verEmail = re.test(email.current.value);
    if(first.current.value.length < 2) {
      setVerifyFirst(true);
    }
    else {
      setVerifyFirst(false);
    }
    if(last.current.value.length < 2) {
      setVerifyLast(true);
    }
    else {
      setVerifyLast(false);
    }
    if(verEmail === false) {
      setVerifyEmail(true);
    }
    else {
      setVerifyEmail(false);
    }
    if(phone.current.value.length !== 8) {
      setVerifyPhone(true);
    }
    else {
      setVerifyPhone(false);
    }
  }

  const handleRegistration = (e) => {
    e.preventDefault();
    verification(firstName, lastName, email, phone);

    let formData = {
      'first_name': firstName,
      'last_name': lastName,
      'email': email,
      'area_code': areaCode,
      'phone': phone
    }

    if( firstName !== '' &&
        lastName !== '' &&
        phone !== '') {
      console.log('data sent');
       axios.post(' ​https://api.trackinglove.com/leads ',{formData})
       .then(res => console.log(res))
       .catch(error => console.error(error));
    }
  }

    return (
        <form onSubmit={handleRegistration} className={styles.form}>
        <section className={styles.inputs}>
            <label>First Name</label>
            <input
              type="text"
              className={styles.firstNameInput}
              ref={firstName}
              className={styles.input}
              placeholder="e.g John" />
              {verifyfirst && 
                <p className={styles.error}> first name should have more than 2 or more letters </p>}
        </section>
        <section className={styles.inputs}>
            <label>Second Name</label>
            <input
              type="text" 
              className={styles.lastNameInput} 
              className={styles.input}
              ref={lastName}
              placeholder="e.g Lander" />
              {verifyLast && 
                <p className={styles.error}>last name should have more than 2 or more letters</p>}
         </section>     
         <section className={styles.inputs}>
            <label>Email</label>
            <input
              type="email"
              className={styles.emailInput}
              ref={email}
              className={styles.input}
              placeholder="e.g name@gmail.com" />
              {verifyEmail && 
                <p className={styles.error}>Incorrect email input</p>}
         </section>
         <section className={styles.inputs}>
           <label>Phone Number</label>
           <div className={styles.numbersInput}>
            <input 
              type="number"
              ref={areaCode}
              className={styles.firstNumber} />
            <input 
              type="number"
              ref={phone}
              className={styles.secondNumber}
              placeholder="8710211" />
              {verifyPhone && 
                <p className={styles.error}>Phone number length is incorrect</p>}
            </div>   
         </section>
         {
           countryDatas.map((countryData, index) => {
             return (
               <li key={index}>
                 <p> {countryData.name} </p>
                 <p> {countryData.code} </p>
                 <img
                  className={styles.countryImage}
                  src={countryData.flag} 
                  width={200}
                  height={200}
                  alt="col" />
               </li>
             )
           })
         }
         <button 
          type="submit"
          className={styles.submitButton}>
            Get info
          </button>
       </form>
    )
}

export default Form;
