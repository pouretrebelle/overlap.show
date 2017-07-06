import React from 'react';
import { Link } from 'react-router';
import { prefixLink } from 'gatsby-helpers';

import styles from './TitleText.styl';

import { config } from 'config';

const TitleText = () => (
  <Link to={prefixLink('/')}>
    <h1 className={styles.title}>
      {config.siteShortTitle}
    </h1>
  </Link>
);

export default TitleText;
