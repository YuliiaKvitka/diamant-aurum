import styles from './FormAdBlue.module.css';

const ModalWindow = ({ isOpen, title, message, onClose }) => {
  if (!isOpen) return null;

  return (
    <div>
      {/* Затемнение фона */}
      <div
        className={styles.modalOverlay}
        onClick={onClose} // Закрываем модальное окно при клике на фон
      />

      {/* Содержимое модального окна */}
      <div
        className={styles.modalContent}
      >
        <div className={styles.header}><h2 className={styles.titleModal}>{title}</h2></div>
        <div className={styles.blockMessage}><p className={styles.message}>{message}</p></div>
        <div className={styles.wrapperBtn}><button className={styles.btnModal} onClick={onClose}>Закрити</button></div>
      </div>
    </div>
  );
};

export default ModalWindow;






