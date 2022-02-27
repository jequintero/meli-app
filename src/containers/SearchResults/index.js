import React from 'react';
import PropTypes from 'prop-types';
import { injectIntl } from 'react-intl';
import { Helmet } from 'react-helmet';
import Breadcrumbs from '../../components/Breadcrumbs';
import ProductItem from '../../components/ProductItem';
import styles from './searchResults.module.scss';
import messages from './messages';
import { api } from '../../api';
import { useServerData } from '../../state/serverDataContext';

const SearchResults = ({ intl }) => {
  const serverProducts = useServerData(data => {
    return data.products || {};
  });

  const { formatMessage } = intl;
  return (
    <section>
      <Helmet>
        <title>{formatMessage(messages.title)}</title>
      </Helmet>
      <Breadcrumbs values={serverProducts.categories} />
      <section className={styles.searchResultsContainer}>
        <ul>
          {serverProducts.items
            ? serverProducts.items.map(
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
  intl: PropTypes.object.isRequired
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
