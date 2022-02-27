import React, { useState } from 'react';
import { imagePath } from '../../utils/assetUtils';
import PropTypes from 'prop-types';
import { injectIntl } from 'react-intl';
import messages from './messages';
import styles from './navbar.module.scss';

const NavBar = ({ intl }) => {
  const { formatMessage } = intl;

  return (
    <nav>
      <figure className={styles.logoContainer}>
        <img
          className={styles.logo}
          src={imagePath('Logo_ML.png')}
          srcSet={imagePath('Logo_ML@2x.png')}
          alt={formatMessage(messages.logoAlt)}
        />
      </figure>
      <form className={styles.searchContainer} action={'/items'}>
        <input
          className={styles.input}
          type="search"
          name="search"
          placeholder={formatMessage(messages.searchPlaceholder)}
        ></input>
        <input
          className={styles.submit}
          type="submit"
          value=""
          data-testid="search"
        ></input>
      </form>
    </nav>
  );
};

NavBar.propTypes = {
  intl: PropTypes.object.isRequired
};

export default injectIntl(NavBar);
