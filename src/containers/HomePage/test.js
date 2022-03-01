import React from 'react';
import { IntlProvider } from 'react-intl';
import ReactDOM from 'react-dom';
import HomePage from '../HomePage';
import { ServerDataProvider } from '../../state/serverDataContext';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';

import messages_es from '../../translations/es.json';

const serverData = window.__SERVER_DATA__;

describe('<HomePage />', () => {
  it('renders HomePage container', () => {
    const history = createMemoryHistory();
    const div = document.createElement('div');
    ReactDOM.render(
      <IntlProvider locale={'es'} messages={messages_es}>
        <ServerDataProvider value={serverData}>
          <Router history={history}>
            <HomePage history={history} />
          </Router>
        </ServerDataProvider>
      </IntlProvider>,
      div
    );
  });
});
