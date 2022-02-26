import { defineMessages } from 'react-intl';

export const scope = 'app.containers.ProductDetail';

export default defineMessages({
  title: {
    id: `${scope}.title`,
    defaultMessage: 'Detalle {productName}'
  },
  buy: {
    id: `${scope}.buy`,
    defaultMessage: 'Comprar'
  },
  productDescription: {
    id: `${scope}.productDescription`,
    defaultMessage: 'Descripción del producto'
  }
});
