import React from 'react';

import styles from './ShowTitle.styl';

import { config } from 'config';

const ShowTitle = () => (
  <h1 className={styles.title}>
    {config.siteTitle}
  </h1>
);

export default ShowTitle;
