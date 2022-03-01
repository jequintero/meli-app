import React from 'react';
import PropTypes from 'prop-types';
import { imagePath } from '../../utils/assetUtils';
import styles from './productItem.module.scss';

const ProductItem = ({
  id,
  title,
  price,
  picture,
  free_shipping,
  state_name = '',
  handleGoToDetails
}) => {
  const onClickItem = () => handleGoToDetails(id);
  return (
    <li className={styles.product} onClick={onClickItem}>
      <div className={styles.productInfo}>
        <figure>
          <img src={picture || imagePath('placeholder.webp')} alt={title} />
        </figure>
        <div className={styles.details}>
          <h3
            className={free_shipping ? styles.freeShipping : ''}
          >{`$ ${price}`}</h3>
          <p className={styles.description}>{title}</p>
        </div>
        <div className={styles.state}>
          <p>{state_name}</p>
        </div>
      </div>
    </li>
  );
};

ProductItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  free_shipping: PropTypes.bool.isRequired,
  state_name: PropTypes.string,
  handleGoToDetails: PropTypes.func.isRequired
};

export default ProductItem;
