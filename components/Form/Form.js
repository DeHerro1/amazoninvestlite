import React from 'react';
import styles from '../../styles/Form.module.css';

const Form = () => {
    return (
        <form className={styles.form}>
        <section className={styles.inputs}>
            <label>First Name</label>
            <input
              type="text"
              className={styles.firstNameInput}
              className={styles.input}
              placeholder="e.g John" />
        </section>
        <section className={styles.inputs}>
            <label>Second Name</label>
            <input
              type="text" 
              className={styles.lastNameInput} 
              className={styles.input}
              placeholder="e.g Lander" />
         </section>     
         <section className={styles.inputs}>
            <label>Email</label>
            <input
              type="email"
              className={styles.emailInput}
              className={styles.input}
              placeholder="e.g name@gmail.com" />
         </section>
         <section className={styles.inputs}>
           <label>Phone Number</label>
           <div className={styles.numbersInput}>
            <input type="number"
              className={styles.firstNumber} />
            <input type="number"
              className={styles.secondNumber}
              placeholder="8710211" />
            </div>   
         </section>
         <button type="submit" className={styles.submitButton}>Get info</button>
       </form>
    )
}

export default Form;
