import React from 'react';
import PropTypes from 'prop-types';

import styles from './Artist.module.styl';

import ResponsiveImage from '../common/images/ResponsiveImage';

const Artist = ({ data }) => (
  <div className={styles.wrapper}>
    <h2 className={styles.name}>
      {data.frontmatter.name}
    </h2>
    <div className={styles.portrait}>
      { data.frontmatter.portrait && <ResponsiveImage
        imagePath={`portraits/${data.frontmatter.portrait}`}
        width={[518, 252, 264]}
        maxBreakpoint={1176}
        alt={data.frontmatter.name}
      /> }
    </div>
    <div className={styles.bio} dangerouslySetInnerHTML={{ __html: data.html }} />
  </div>
);

Artist.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Artist;
