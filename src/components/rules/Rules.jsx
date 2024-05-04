import styles from './Rules.module.css'

const Rules = () => {
  return (
    <section className={styles.section}>
        <h2 className={styles.title}>Як правильно зберігати AdBlue?</h2>
        <div className={styles.wrapper}>
            <div className={styles.columnLeft}>
                <div className={styles.wrapperText}>
                    <p>Відновлюючий агент AdBlue продається у фірмових каністрах. У них він і зберігається.</p> 
                    <p>Не можна переливати рідину в іншу тару (особливо металеву), оскільки її компоненти можуть вступити в хімічну реакцію з різними речовинами та матеріалами. Солі, що утворюються при цьому, потрапляють у каталізатор і порушують його роботу.</p>
                </div>
            </div>
            <div className={styles.columnRight}>
                <div className={styles.wrapperText}>
                    <p>Оптимальна температура зберігання AdBlue коливається від 0 до -10 °С. Якщо температура опускається нижче від -11 °С, рідина замерзає. При цьому після розморожування властивості реагенту повністю відновлюються.</p> 
                    <p>Щоб уникнути погіршення якості реагенту, не рекомендується зберігати його при температурах понад +35 °С.</p>
                </div>
            </div>
        </div>
    </section>
    )
}

export default Rules


