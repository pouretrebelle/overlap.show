import React from 'react';
import Link from 'gatsby-link';

import styles from './Navigation.module.styl';

import { EVENTBRITE_URL } from '../../constants/urls';

const Navigation = () => (
  <nav className={styles.navigation}>
    <Link to={'/about/'} className={styles.link}>
      About
    </Link>
    <Link to={'/artists/'} className={styles.link}>
      Artists
    </Link>
    <a href={EVENTBRITE_URL} className={styles.link}>
      Tickets
    </a>
  </nav>
);

export default Navigation;
