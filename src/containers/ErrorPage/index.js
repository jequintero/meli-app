import React from 'react';
import PropTypes from 'prop-types';
import { injectIntl } from 'react-intl';
import { Helmet } from 'react-helmet';
import messages from './messages';

const ErrorPage = ({ intl }) => {
  const { formatMessage } = intl;
  return (
    <section>
      <Helmet>
        <title>{formatMessage(messages.title)}</title>
      </Helmet>
      <h4>Ha ocurrido un error </h4>
    </section>
  );
};

ErrorPage.propTypes = {
  intl: PropTypes.object.isRequired
};

export default injectIntl(ErrorPage);
