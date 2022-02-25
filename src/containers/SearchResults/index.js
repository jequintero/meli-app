import React from 'react';
import PropTypes from 'prop-types';
import { injectIntl } from 'react-intl';
import { Helmet } from 'react-helmet';
import Breadcrumbs from '../../components/Breadcrumbs';
import messages from './messages';

const SearchResults = ({ intl }) => {
  const { formatMessage } = intl;
  return (
    <section>
      <Helmet>
        <title>{formatMessage(messages.title)}</title>
      </Helmet>
      <Breadcrumbs />
    </section>
  );
};

SearchResults.propTypes = {
  intl: PropTypes.object.isRequired
};

export default injectIntl(SearchResults);
