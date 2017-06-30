import React from 'react';

import styles from './PageTitle.styl';

import { config } from 'config';

const PageTitle = () => (
  <h1 className={styles.title}>
    {config.siteTitle}
  </h1>
);

export default PageTitle;
