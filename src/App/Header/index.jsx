import React from 'react';

import Navigation from './Navigation';
import styles from './styles.css';

const Index = () => (<div className={styles.home}>
  <div className="container">
    <Navigation />
    <h1 className={styles.slogan}>Save the world with Avenger team</h1>
    <h6 className={styles.description}>Winner winner chicken dinner</h6>
  </div>
</div>
);

export default Index;
