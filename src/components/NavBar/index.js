import React from 'react';
import { imagePath } from '../../utils/assetUtils';
import styles from './navbar.module.scss';

const NavBar = () => {
  return (
    <nav>
      <figure className={styles.logoContainer}>
        <img
          className={styles.logo}
          src={imagePath('Logo_ML.png')}
          srcSet={imagePath('Logo_ML@2x.png')}
          alt="Logotipo mercado libre"
        />
      </figure>
      <form className={styles.searchContainer}>
        <input
          className={styles.input}
          type="search"
          name="search"
          placeholder="Nunca dejes de buscar"
        ></input>
        <input className={styles.submit} type="submit" value=""></input>
      </form>
    </nav>
  );
};

export default NavBar;
