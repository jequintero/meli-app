import { defineMessages } from 'react-intl';

export const scope = 'app.containers.ErrorPage';

export default defineMessages({
  title: {
    id: `${scope}.title`,
    defaultMessage: 'Error'
  },
  errorMessage: {
    id: `${scope}.errorMessage`,
    defaultMessage: 'Ha ocurrido un error'
  }
});
