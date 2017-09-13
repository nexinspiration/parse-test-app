import React from 'react';
import { ComputeIO } from './ComputeIO';
import styles from '../styles/app.css';

export default function App() {
  return (
    <section>
      <div className={styles['challenge-accepted']}>
        <div className={styles['button-container']}>
          <ComputeIO />
        </div>
      </div>
    </section>
  );
}
