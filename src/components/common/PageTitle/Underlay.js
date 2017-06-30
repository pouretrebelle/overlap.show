import React from 'react';

import styles from './PageTitle.styl';
import SingleShape from 'src/components/common/SingleShape';

const Underlay = () => (
  <SingleShape x={0} y={0}>
    <div className={styles.underlay} />
  </SingleShape>
);

export default Underlay;
