import React from 'react';
import styles from './breadcrumbs.module.scss';

const Breadcrumbs = () => {
  return (
    <nav className={styles.breadcrumbs}>
      <ul>
        <li>
          <a href="/">Product Flow 1</a>
        </li>
        <li>Product Flow 2</li>
      </ul>
    </nav>
  );
};

export default Breadcrumbs;
