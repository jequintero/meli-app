import React from 'react';
import PropTypes from 'prop-types';
import styles from './productItem.module.scss';

const ProductItem = ({
  id,
  title,
  price,
  picture,
  condition,
  free_shipping,
  state_name = ''
}) => {
  return (
    <li className={styles.product}>
      <div className={styles.productInfo}>
        <figure>
          <img src={picture} alt={title} />
        </figure>
        <div className={styles.details}>
          <h3>{`$ ${price}`}</h3>
          <p className={styles.description}>{title}</p>
        </div>
        <div className={styles.city}>
          <p>{state_name}</p>
        </div>
      </div>
    </li>
  );
};

ProductItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  picture: PropTypes.string.isRequired,
  condition: PropTypes.string,
  free_shipping: PropTypes.bool.isRequired,
  state_name: PropTypes.string
};

export default ProductItem;
