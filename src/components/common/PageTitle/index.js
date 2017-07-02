import React from 'react';

import styles from './PageTitle.styl';
import { Link } from 'react-router';
import { prefixLink } from 'gatsby-helpers';

import { config } from 'config';

const PageTitle = () => (
  <Link to={prefixLink('/')}>
    <h1 className={styles.title}>
      {config.siteShortTitle}
    </h1>
  </Link>
);

export default PageTitle;
