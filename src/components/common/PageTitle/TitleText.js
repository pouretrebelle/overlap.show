import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';

import styles from './TitleText.styl';

const TitleText = ({ data }) => (
  <Link to={'/'}>
    <h1 className={styles.title}>
      {data.site.siteMetadata.shortTitle}
    </h1>
  </Link>
);

TitleText.propTypes = {
  data: PropTypes.object,
};

export default TitleText;

export const pageQuery = graphql`
  query TitleTextQuery {
    site {
      siteMetadata {
        shortTitle
      }
    }
  }
`;
