import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './ShowTitle.styl';

import { config } from 'config';

const ShowTitle = () => (
  <h1 className={styles.title}>
    {config.siteTitle}
  </h1>
);

export default ShowTitle;
