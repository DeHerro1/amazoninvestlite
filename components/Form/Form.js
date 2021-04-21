import React, { useEffect, useRef, useState } from 'react';
import {Link} from 'next/link';
import styles from '../../styles/Form.module.css';
import axios from 'axios';
import Image from 'next/image';


const Form = () => {
  const firstName = useRef();
  const lastName = useRef();
  const email = useRef();
  const phone = useRef();
  const [verifyfirst, setVerifyFirst] = useState(false);
  const [verifyLast, setVerifyLast] = useState(false);
  const [verifyEmail, setVerifyEmail] = useState(false);
  const [verifyPhone, setVerifyPhone] = useState(false);
  const [actualLocation, setActualLocation] = useState([]);

  let country_code = actualLocation[0];
  let ip = actualLocation[1];

  useEffect(() => {
    return (
      axios.get('https://ipapi.co/json/')
        .then(res => {
          return (
            setActualLocation([res.data.country_calling_code, res.data.ip])
          )
        })
        .catch(error => console.log(error))
    )
  }, []);
  
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
    if(phone.current.value.length === 8) {
      setVerifyPhone(false);
    }
    else {
      setVerifyPhone(true);
    }
  }

  const handleRegistration = (e) => {
    e.preventDefault();
    verification(firstName, lastName, email, phone);
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    let first_name = firstName.current.value;
    let last_name = lastName.current.value;
    let mail = email.current.value;
    let phone_number = Number(phone.current.value);
    let verEmail = re.test(mail);

    let formData = {
      'first_name': first_name,
      'last_name': last_name,
      'email': mail,
      'area_code': country_code,
      'ip': ip,
      'phone': phone_number,
    }

    if( first_name.length > 2 &&
        last_name.length > 2 &&
        phone_number.length === 8 &&
        verEmail === true
         ) {
           axios({
             methods: "post",
             headers: {
               'Content-Type': 'application/x-www-form-urlencoded'
             },
             url: 'https://api.trackinglove.com/leads',
             data: formData
           })
           .then(res => console.log(res, 'data sent'))
           .catch(error => console.error(error, 'data not sent'))
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
                <p className={styles.error}>Minimum two characters. Letters only (mandatory)</p> }
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
                <p className={styles.error}> Minimum two characters. Letters only (mandatory)</p>}
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
                <p className={styles.error}>Invalid use format username@domain.xxx</p>}
         </section>
         <section className={styles.inputs}>
           <label>Phone Number</label>
           <div className={styles.numbersInput}>
           <div className={styles.firstNumber}>{country_code}</div>
            <input 
              type="tel"
              ref={phone}
              className={styles.secondNumber}
              placeholder="8710211" />
            </div>
            {verifyPhone && 
                <p className={styles.error}>Phone number (mandatory)</p>}
         </section>
         <button
          type="submit"
          className={styles.submitButton}>
            Get info
          </button>
       </form>
    )
}

export default Form;