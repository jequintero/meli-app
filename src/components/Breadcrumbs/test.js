import React from 'react';
import { IntlProvider } from 'react-intl';
import Breadcrumbs from '../Breadcrumbs';
import ReactDOM from 'react-dom';
import messages_es from '../../translations/es.json';

describe('<Breadcrumbs />', () => {
  it('renders Breadcrumbs', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <IntlProvider locale={'es'} messages={messages_es}>
        <Breadcrumbs />
      </IntlProvider>,
      div
    );
  });
});
