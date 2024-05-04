import React, { useState, useEffect } from 'react';
import styles from './CountdownTimer.module.css'

const CountdownTimer = ({ initialHours = 0, initialMinutes = 0, initialSeconds = 0, initialMilliseconds = 0 }) => {
  const [hours, setHours] = useState(initialHours);
  const [minutes, setMinutes] = useState(initialMinutes);
  const [seconds, setSeconds] = useState(initialSeconds);
  const [milliseconds, setMilliseconds] = useState(initialMilliseconds);

  useEffect(() => {
    if (hours === 0 && minutes === 0 && seconds === 0 && milliseconds === 0) {
      return; // Таймер достиг нуля, остановим интервал
    }

    const timer = setInterval(() => {
      setMilliseconds((prev) => {
        if (prev === 0) {
          if (seconds > 0 || minutes > 0 || hours > 0) {
            setSeconds((sec) => (sec > 0 ? sec - 1 : 59));
            return 99; // Устанавливаем на 99, чтобы отсчитывать вниз
          }
        } else {
          return prev - 1;
        }
        return prev;
      });

      setSeconds((prev) => {
        if (prev === 0) {
          if (minutes > 0 || hours > 0) {
            setMinutes((min) => (min > 0 ? min - 1 : 59));
          }
        }
        return prev;
      });

      setMinutes((prev) => {
        if (prev === 0) {
          if (hours > 0) {
            setHours((hr) => (hr - 1));
          }
        }
        return prev;
      });
    }, 1000); // Обновляем каждые 1000 миллисекунд

    return () => clearInterval(timer); // Очищаем интервал при размонтировании компонента
  }, [hours, minutes, seconds, milliseconds]); // Обновляем при изменении значений таймера

  const pad = (num) => String(num).padStart(2, '0'); // Добавляет лидирующие нули

  return (
    <div className={styles.timer}>
      {pad(hours)} : {pad(minutes)} : {pad(seconds)} : {pad(milliseconds)}
    </div>
  );
};

export default CountdownTimer;
