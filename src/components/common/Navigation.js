import React from 'react';
import { Link } from 'react-router';
import { prefixLink } from 'gatsby-helpers';

import styles from './Navigation.styl';

const Navigation = () => (
  <nav className={styles.navigation}>
    <Link to={prefixLink('/artists/')} className={styles.link}>
      Artists
    </Link>
  </nav>
);

export default Navigation;
