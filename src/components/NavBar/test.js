import React from 'react';
import { render, screen } from '@testing-library/react';

import NavBar from '../NavBar';
import { ServerDataProvider } from '../../state/serverDataContext';

describe('<NavBar />', () => {
  it('renders navbar', () => {
    render(
      <ServerDataProvider>
        <NavBar />
      </ServerDataProvider>
    );
    const input = screen.getByTestId('search');
    expect(input.textContent).toEqual('');
  });
});
