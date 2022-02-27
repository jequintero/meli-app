import React from 'react';
import PropTypes from 'prop-types';
import styles from './breadcrumbs.module.scss';

const Breadcrumbs = ({ values = [] }) => {
  return (
    <nav className={styles.breadcrumbs}>
      <ul>
        {values.map(value => (
          <li>
            <a href={`/items?search=${value}`}>{value}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

Breadcrumbs.propTypes = {
  values: PropTypes.array
};

export default Breadcrumbs;
