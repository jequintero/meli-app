import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { injectIntl } from 'react-intl';
import { Helmet } from 'react-helmet';
import { api } from '../../api';
import { twoDigitsInteger } from '../../utils/format';
import { useServerData } from '../../state/serverDataContext';
import { useParams } from 'react-router-dom';
import Breadcrumbs from '../../components/Breadcrumbs';
import styles from './productDetail.module.scss';
import messages from './messages';

const ProductDetail = ({ intl, history }) => {
  const { formatMessage } = intl;
  const { id } = useParams();

  const [isLoading, setLoading] = useState(true);

  const serverProduct = useServerData(data => {
    if (data && data.product && data.product.error) {
      history.push('/error');
    }
    return data && data.product ? data.product : {};
  });

  const [product, setProduct] = useState(serverProduct);

  useEffect(() => {
    if (!serverProduct.length) {
      api.products.byId(id).then(product => {
        setProduct(product);
        setLoading(false);
      });
    }
  }, [id, serverProduct.length]);

  const { item, description } = product;
  const { title = '', price, picture, condition = '', sold_quantity = 0 } =
    item || {};
  const { amount, decimals } = price || {};

  return (
    <section>
      <Helmet>
        {<title>{formatMessage(messages.title, { productName: title })}</title>}
      </Helmet>
      <Breadcrumbs />
      {isLoading ? <div className="spinner" /> : null}
      <section
        className={isLoading ? 'loadingState' : styles.productDetailContainer}
      >
        <figure>
          <img src={picture} alt={title} />
        </figure>
        <div className={styles.buy}>
          <p className={styles.status}>
            {formatMessage(messages.status, { condition, sold_quantity })}
          </p>
          <h3>{title}</h3>
          <h1>
            {`$ ${amount}`}
            <span>{twoDigitsInteger(decimals)}</span>
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
  history: PropTypes.object.isRequired
};

ProductDetail.fetchData = req => {
  const url = req.url.split('/');
  const productId = url[url.length - 1];
  return api.products.byId(productId).then(product => {
    return {
      product
    };
  });
};

export default injectIntl(ProductDetail);
