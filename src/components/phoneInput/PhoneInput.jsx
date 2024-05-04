
import styles from './PhoneInput.module.css';
import InputMask from 'react-input-mask'; //Установить библиотеку react-input-mask, которая помогает создавать маски для ввода  npm install react-input-mask

const PhoneInput = ({ value, onChange }) => {

  const handleInputChange = (event) => {
    const rawValue = event.target.value;
    // Удаляем все, что не является числом
    const cleanedValue = rawValue.replace(/[^\d]/g, '');
    if (cleanedValue.length <= 12) {
      onChange(rawValue);
    }
  };

 

  return (
    <InputMask
      mask="+380 (99) 999 99 99"
      value={value}
      onChange={handleInputChange}
      
    >
      {(inputProps) => (
        <input className={styles.input} {...inputProps} type="text" placeholder="+380 (__)___ __ __" />
      )}
    </InputMask>
  );
};

export default PhoneInput;
