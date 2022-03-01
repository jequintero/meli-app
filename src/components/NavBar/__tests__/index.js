import React from 'react';
import { render, screen } from '@testing-library/react';
import { IntlProvider } from 'react-intl';
import NavBar from '../index';
import ReactDOM from 'react-dom';
import messages_es from '../../../translations/es.json';

describe('<NavBar />', () => {
  it('renders navbar', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <IntlProvider locale={'es'} messages={messages_es}>
        <NavBar />
      </IntlProvider>,
      div
    );
  });
  it('navbar search input initial value', () => {
    render(
      <IntlProvider locale={'es'} messages={messages_es}>
        <NavBar />
      </IntlProvider>
    );
    const input = screen.getByTestId('search');
    expect(input.textContent).toEqual('');
  });
});
