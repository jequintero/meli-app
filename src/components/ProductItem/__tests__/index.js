import React from 'react';
import ReactDOM from 'react-dom';
import ProductItem from '../index';
import { ServerDataProvider } from '../../../state/serverDataContext';

const serverData = window.__SERVER_DATA__;

describe('<ProductItem />', () => {
  it('renders ProductItem', () => {
    const props = {
      id: '',
      title: 'iPhone 13',
      price: '22,000',
      picture: '',
      free_shipping: false,
      handleGoToDetails: () => {}
    };
    const div = document.createElement('div');
    ReactDOM.render(
      <ServerDataProvider value={serverData}>
        <ProductItem
          id={''}
          title={props.title}
          price={props.price}
          picture={props.picture}
          free_shipping={props.free_shipping}
          handleGoToDetails={() => {}}
        />
      </ServerDataProvider>,
      div
    );
  });
});
