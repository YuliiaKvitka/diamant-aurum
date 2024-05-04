import React, { useState, useEffect } from 'react';
import styles from './Timer.module.css'

const Timer = ({ initialHours = 0, initialMinutes = 0, initialSeconds = 0, initialMilliseconds = 0 }) => {
  const [hours, setHours] = useState(initialHours);
  const [minutes, setMinutes] = useState(initialMinutes);
  const [seconds, setSeconds] = useState(initialSeconds);
  const [milliseconds, setMilliseconds] = useState(initialMilliseconds);

  useEffect(() => {
    const timer = setInterval(() => {
      setMilliseconds((prev) => {
        const newMilliseconds = prev + 1;
        if (newMilliseconds >= 100) {
          setSeconds((sec) => sec + 1);
          return 0;
        }
        return newMilliseconds;
      });

      setSeconds((prev) => {
        if (prev >= 60) {
          setMinutes((min) => min + 1);
          return 0;
        }
        return prev;
      });

      setMinutes((prev) => {
        if (prev >= 60) {
          setHours((hr) => hr + 1);
          return 0;
        }
        return prev;
      });

    }, 1000); // Обновляем каждые 1000 миллисекунд

    return () => clearInterval(timer); // Очищаем таймер при размонтировании компонента
  }, []); // Пустой массив зависимостей гарантирует, что эффект запустится только один раз

  const pad = (num) => String(num).padStart(2, '0'); // Добавляет лидирующие нули

  return (
    <div className={styles.timer}>
      {pad(hours)} : {pad(minutes)} : {pad(seconds)} : {pad(milliseconds)}
    </div>
  );
};

export default Timer;