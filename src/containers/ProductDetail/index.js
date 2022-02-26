import React from 'react';
import PropTypes from 'prop-types';
import { injectIntl } from 'react-intl';
import { Helmet } from 'react-helmet';
import Breadcrumbs from '../../components/Breadcrumbs';
import styles from './productDetail.module.scss';
import messages from './messages';

const ProductDetail = ({ intl, image, name, description, price, decimals }) => {
  const { formatMessage } = intl;
  return (
    <section>
      <Helmet>
        <title>{formatMessage(messages.title, { productName: name })}</title>
      </Helmet>
      <Breadcrumbs />
      <section className={styles.productDetailContainer}>
        <figure>
          <img src={image} alt={name} />
        </figure>
        <div className={styles.buy}>
          <p className={styles.status}>Status</p>
          <h3>{name}</h3>
          <h1>
            {`$ ${price}`}
            <span>{decimals}</span>
          </h1>
          <button>{formatMessage(messages.buy)}</button>
        </div>
        <div className={styles.productDescription}>
          <h2>{formatMessage(messages.productDescription)}</h2>
          <p>{description}</p>
        </div>
      </section>
    </section>
  );
};

ProductDetail.propTypes = {
  intl: PropTypes.object.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  decimals: PropTypes.number.isRequired
};

export default injectIntl(ProductDetail);
