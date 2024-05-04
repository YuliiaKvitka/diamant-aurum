
import { useState } from 'react';
import PhoneInput from '../phoneInput/PhoneInput';
import styles from './SaveDataButton.module.css';
import 'react-phone-number-input/style.css';
import { isValidPhoneNumber } from 'react-phone-number-input'; // Импортируем функцию валидации  npm i react-phone-number-input
// import Modal from 'react-modal'; // Импортируем модальное окно   npm install react-modal

// Функция для модального окна
const Modal = ({ isOpen, closeModal, title, message }) => {
    if (!isOpen) return null;

    return (
    <div className={styles.modal}>
       <div className={styles.blockTitle}> <h2 className={styles.title}>{title}</h2></div>
        <div className={styles.blockMessage}><p className={styles.message}>{message}</p></div>
        <button className={styles.btn} onClick={closeModal}>Закрити</button>
    </div>
    );
};


const SaveDataButton = () => {
    const [phone, setPhone] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false); // Управление состоянием модального окна
    const [requestInfo, setRequestInfo] = useState(null); // Данные для отображения в модальном окне
    const [modalTitle, setModalTitle] = useState('');
    const [modalMessage, setModalMessage] = useState('');

    const handleSavePhone = async () => {
    // Проверяем валидность номера телефона
    if (!isValidPhoneNumber(phone)) {
        setModalTitle('Помилка');
        setModalMessage('Номер телефону введений неправильно. Будь ласка, перевірте.');
        setIsModalOpen(true);
      return; // Если телефон недействителен, прекращаем выполнение
    }

    setIsLoading(true);


        
    try {
        const response = await fetch('/api/saveData', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ phone }),
        });

    if (response.ok) {
        const result = await response.json();

        // Информация для модального окна
        setModalTitle('Вашу заявку прийнято!');
      setModalMessage(`Номер заявки: ${result.requestNumber}\n Дата : ${new Date().toLocaleString('uk-UA', { timeZone: 'Europe/Kyiv' })}\nНомер телефону: ${phone} <br/> Дякуємо за звернення!`);
      
        setPhone(''); // Очистка после успешного сохранения
        setIsModalOpen(true); // Показываем модальное окно

    } else {
        setModalTitle('Помилка');
        setModalMessage('Помилка під час збереження номера.');
        setIsModalOpen(true);
        }
    } catch (error) {
        console.error(error);
        setModalTitle('Помилка');
        setModalMessage('Виникла помилка під час збереження номера.');
        setIsModalOpen(true);
    }

    setIsLoading(false);
    };

    const closeModal = () => {
    setIsModalOpen(false);
    };






    return (
    <div className={styles.form}>
        <div className={styles.wrapper}>
            <PhoneInput
            value={phone}
            onChange={setPhone}
            placeholder="+380 (XX) XXX-XX-XX" // Плейсхолдер для формата телефона
            />
            <button className={styles.btnbuy} onClick={handleSavePhone} disabled={isLoading}>
            {isLoading ? 'Зберігається...' : 'Купити в один клік'}
                </button>
                {/* Модальное окно для сообщений */}
      <Modal 
        isOpen={isModalOpen} 
        closeModal={closeModal} 
        title={modalTitle} 
        message={modalMessage} 
      />


                {/* {isModalOpen && ( // Простая реализация модального окна
        <div style={{ // Инлайн-стили для простого модального окна
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          backgroundColor: 'white',
          padding: '20px',
          border: '1px solid #ccc',
          zIndex: 1000,
        }}>
          <h2>Вашу заявку прийнято!</h2>
          <p>Номер заявки: {requestInfo.requestNumber}</p>
          <p>Дата і час: {requestInfo.date}</p>
          <p>Номер телефону: {requestInfo.phone}</p>
          <button onClick={closeModal}>Закрити</button>
        </div>
      )} */}

      {/* Прозрачный слой для затемнения фона */}
      {isModalOpen && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          zIndex: 999,
        }} onClick={closeModal} />
      )}
              

        </div>
      
    </div>
    );
};

export default SaveDataButton;







