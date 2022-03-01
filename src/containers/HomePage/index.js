import React from 'react';
import PropTypes from 'prop-types';
import { injectIntl } from 'react-intl';
import { Helmet } from 'react-helmet';
import messages from './messages';

const HomePage = ({ intl }) => {
  const { formatMessage } = intl;
  return (
    <section>
      <Helmet>
        <title>{formatMessage(messages.title)}</title>
      </Helmet>
    </section>
  );
};

HomePage.propTypes = {
  intl: PropTypes.object.isRequired
};

export default injectIntl(HomePage);
