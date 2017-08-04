import React from 'react';
import PropTypes from 'prop-types';

import styles from './Artist.styl';

import ResponsiveImage from '../common/images/ResponsiveImage';

const Artist = ({ page }) => (
  <div className={styles.wrapper}>
    <h2 className={styles.name}>
      {page.data.name}
    </h2>
    <div className={styles.portrait}>
      { page.data.portrait && <ResponsiveImage
        imagePath={`portraits/${page.data.portrait}`}
        width={[518, 252, 264]}
        maxBreakpoint={1176}
        alt={page.data.name}
      /> }
    </div>
    <div className={styles.bio} dangerouslySetInnerHTML={{ __html: page.data.body }} />
  </div>
);

Artist.propTypes = {
  page: PropTypes.object.isRequired,
};

export default Artist;
