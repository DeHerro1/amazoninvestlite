import React from 'react';
import { useState } from 'react';
import modalStyle from '../../styles/ModalStyles.module.css';

const Modal = ({ hideModal }) => {

    return (
        <div className={modalStyle.modal}>
            <div className={modalStyle.modalContainer}>
                <p>You have successfully created an account</p>
                <button onClick={hideModal}>Close</button>
            </div>
        </div>
    )
}

export default Modal;
