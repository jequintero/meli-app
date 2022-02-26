import React from 'react';
import PropTypes from 'prop-types';
import { injectIntl } from 'react-intl';
import { Helmet } from 'react-helmet';
import Breadcrumbs from '../../components/Breadcrumbs';
import styles from './searchResults.module.scss';
import messages from './messages';

const SearchResults = ({ intl }) => {
  const { formatMessage } = intl;
  return (
    <section>
      <Helmet>
        <title>{formatMessage(messages.title)}</title>
      </Helmet>
      <Breadcrumbs />
      <section className={styles.searchResultsContainer}>
        <ul></ul>
      </section>
    </section>
  );
};

SearchResults.propTypes = {
  intl: PropTypes.object.isRequired
};

export default injectIntl(SearchResults);
