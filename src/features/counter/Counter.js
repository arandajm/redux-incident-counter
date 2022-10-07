import React from 'react';
import styles from './Counter.module.css';
import { SetCounter } from './SetCounter';
import { useCounter } from './useCounter';

export function Counter() {
  const { count, decrement, increment, set } = useCounter();

  return (
    <div>
      <h1 className={styles.title}>Days Since Last Incident</h1>
      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Decrement value"
          onClick={() => decrement()}
        >
          -
        </button>
        <span className={styles.value}>{count}</span>
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={() => increment()}
        >
          +
        </button>
      </div>
      <div className={styles.row}>
        <SetCounter />
        <button className={styles.button} onClick={() => set(0)}>
          Reset
        </button>
      </div>
    </div>
  );
}
