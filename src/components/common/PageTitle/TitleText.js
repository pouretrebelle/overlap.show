import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';

import styles from './TitleText.styl';

const TitleText = ({ title }) => (
  <Link to={'/'}>
    <h1 className={styles.title}>
      {title}
    </h1>
  </Link>
);

TitleText.propTypes = {
  title: PropTypes.string,
};

export default TitleText;
