import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { injectIntl } from 'react-intl';
import { Helmet } from 'react-helmet';
import Breadcrumbs from '../../components/Breadcrumbs';
import ProductItem from '../../components/ProductItem';
import styles from './searchResults.module.scss';
import messages from './messages';
import { api } from '../../api';
import { useServerData } from '../../state/serverDataContext';

const SearchResults = ({ intl, history }) => {
  const serverProducts = useServerData(data => {
    if (data && data.products && data.products.error) {
      history.push('/error');
    }
    return data && data.products ? data.products : {};
  });

  const [products, setProducts] = useState(serverProducts);
  const search = useLocation().search;
  useEffect(() => {
    if (!serverProducts.length) {
      const searchText = new URLSearchParams(search).get('search');
      api.products.filter(searchText).then(product => setProducts(product));
    }
  }, [search, serverProducts.length]);

  const { formatMessage } = intl;

  const goToDetails = productId => history.push(`items/${productId}`);
  return (
    <section>
      <Helmet>
        <title>{formatMessage(messages.title)}</title>
      </Helmet>
      <Breadcrumbs values={products.categories} />
      <section className={styles.searchResultsContainer}>
        <ul>
          {products.items
            ? products.items.map(
                ({
                  id,
                  title,
                  price,
                  picture,
                  condition,
                  free_shipping,
                  state_name
                }) => (
                  <ProductItem
                    key={id}
                    {...{
                      id,
                      title,
                      picture,
                      condition,
                      free_shipping,
                      state_name
                    }}
                    price={price.amount}
                    handleGoToDetails={goToDetails}
                  />
                )
              )
            : null}
        </ul>
      </section>
    </section>
  );
};

SearchResults.propTypes = {
  intl: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};

SearchResults.fetchData = req => {
  const searchText = req.query.search;
  return api.products.filter(searchText).then(products => {
    return {
      products
    };
  });
};

export default injectIntl(SearchResults);
