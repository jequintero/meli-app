import React from 'react';
import PropTypes from 'prop-types';
import styles from './productItem.module.scss';

const ProductItem = ({ price, description, city, image }) => {
  return (
    <li className={styles.product}>
      <div className={styles.productInfo}>
        <figure>
          <img src={image} alt={description} />
        </figure>
        <div className={styles.details}>
          <h3>{`$ ${price}`}</h3>
          <p className={styles.description}>{description}</p>
        </div>
        <div className={styles.city}>
          <p>{city}</p>
        </div>
      </div>
    </li>
  );
};

ProductItem.propTypes = {
  price: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
};

export default ProductItem;
