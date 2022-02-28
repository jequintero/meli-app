import React from 'react';
import { render, screen } from '@testing-library/react';
import { IntlProvider } from 'react-intl';
import NavBar from '../NavBar';
import { ServerDataProvider } from '../../state/serverDataContext';
import messages_es from '../../translations/es.json';

const serverData = window.__SERVER_DATA__;

describe('<NavBar />', () => {
  it('renders navbar', () => {
    render(
      <IntlProvider locale={'es'} messages={messages_es}>
        <ServerDataProvider value={serverData}>
          <NavBar />
        </ServerDataProvider>
      </IntlProvider>
    );
    const input = screen.getByTestId('search');
    expect(input.textContent).toEqual('');
  });
});
