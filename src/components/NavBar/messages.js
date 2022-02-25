import { defineMessages } from 'react-intl';

export const scope = 'app.components.NavBar';

export default defineMessages({
  searchPlaceholder: {
    id: `${scope}.searchPlaceholder`,
    defaultMessage: 'Nunca dejes de buscar'
  },
  logoAlt: {
    id: `${scope}.logoAlt`,
    defaultMessage: 'Logotipo mercado libre'
  }
});
