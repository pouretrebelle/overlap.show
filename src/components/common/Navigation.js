import React from 'react';
import Link from 'gatsby-link';

import styles from './Navigation.styl';

const Navigation = () => (
  <nav className={styles.navigation}>
    <Link to={'/about/'} className={styles.link}>
      About
    </Link>
    <Link to={'/artists/'} className={styles.link}>
      Artists
    </Link>
  </nav>
);

export default Navigation;
