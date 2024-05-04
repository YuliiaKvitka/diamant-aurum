'use client'
import { useState } from 'react';
// import PhoneInput from 'react-phone-number-input';// Импортируем функцию валидации  npm i react-phone-number-input
import 'react-phone-number-input/style.css';
// import isValidPhoneNumber from 'react-phone-number-input';
import styles from './FormAdBlue.module.css'
import ModalWindow from './ModalWindow'; // Универсальное модальное окно
// import classNames from 'classnames';
import InputMask from 'react-input-mask'; //Установить библиотеку react-input-mask, которая помогает создавать маски для ввода  npm install react-input-mask



const FormAdBlue = () => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalTitle, setModalTitle] = useState('');
    const [modalMessage, setModalMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async () => {
        if (!name.trim()) {
            setModalTitle('Помилка');
            setModalMessage('Будь ласка, введіть ваше ім’я.');
            setIsModalOpen(true);
        return;
    }

        if (phone.includes('_')) {
            setModalTitle('Помилка');
            setModalMessage('Номер телефону не заповнений повністю.');
            setIsModalOpen(true);
        return;
        }

    setIsLoading(true);

    try {
        const response = await fetch('/api/submitApplication', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, phone }),
    });

        if (response.ok) {
            setName('');
            setPhone('');
            setIsLoading(false);
            setModalTitle('Заявку отримано!');
            setModalMessage(
            'З вами зв\'яжуться найближчим часом для отримання ексклюзивних умов.'
        );
        setIsModalOpen(true);
        } else {
            setModalTitle('Помилка');
            setModalMessage('Помилка під час відправки заявки.');
            setIsModalOpen(true);
        }
    } catch (error) {
        console.error(error);
        setModalTitle('Помилка');
        setModalMessage('Виникла помилка під час відправки заявки.');
        setIsModalOpen(true);
    }

    setIsLoading(false);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className={styles.formContainer}>
            <h4 className={styles.formTitle}><span>Залиште заявку,</span><br/> для того щоб отримати ексклюзивні умови</h4>
        <div className={styles.inputWrapper}>
        {/* Используем класс 'filled', чтобы определить, перемещается ли метка */}
        <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={`${styles.input} ${name ? 'filled' : ''}`} // Если поле заполнено, добавляем класс
            required
        />
        <label className={`${styles.label} ${name ? 'filled' : ''}`}>Ваше ім’я</label> {/* Метка */}
        </div>

        <div className={styles.inputWrapper}>
        <InputMask
            mask="+380 (99) 999 99 99" // Маска ввода телефона
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className={`${styles.input} ${phone.includes('_') ? '' : 'filled'}`} // Если поле заполнено
            required
        />
        <label className={`${styles.label} ${phone.includes('_') ? '' : 'filled'}`}>Номер телефону</label> {/* Метка */}
        </div>

        <button  className={styles.btn} onClick={handleSubmit} disabled={isLoading}>
        {isLoading ? 'Відправляється...' : 'Відправити заявку'}
        </button>

        <ModalWindow
        isOpen={isModalOpen}
        title={modalTitle}
        message={modalMessage}
        onClose={closeModal}
        />
    </div>
    );
};

export default FormAdBlue;