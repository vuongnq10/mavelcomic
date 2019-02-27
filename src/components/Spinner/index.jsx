import React from 'react';

import styles from './styles.module.css';

const Spinner = () => (
  <div className={styles.container}>
    <div className={styles.spinner}>
      <div />
      <div />
      <div />
      <div />
    </div>
  </div>
);

export default Spinner;
