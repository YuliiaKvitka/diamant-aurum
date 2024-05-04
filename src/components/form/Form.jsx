import styles from './Form.module.css'
import Button from './button/Button'
import Input from './input/Input'

const Form = () => {
  return (
    <form className={styles.form}>
      <div className={styles.wrapper}>
        <p className={styles.text}><span >Залиште заявку,</span> <br/>
   для того щоб отримати ексклюзивні умови</p>
      </div>
      <Input title='Ім&prime;я' width={293} height={45} />
      <Input title='Телефон' width={293} height={45} />

          {/* <input className={styles.input} type='text'/>
          <input className={styles.input} type='text' /> */}
          <Button width={264} height={45}/>
      
    </form>
  )
}

export default Form
