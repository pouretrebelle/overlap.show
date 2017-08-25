import React from 'react';

import styles from './About.module.styl';

import What from './What';
import When from './When';
import Where from './Where';
import BackgroundShapes from '../common/BackgroundShapes';

const About = () => (
  <BackgroundShapes
    shapeCount={30}
    shapesWrapperClass={styles.backgroundShapes}
    useWhite={false}
    usePrimary={false}
    useSecondary={true}
    useLetters={true}
  >
    <What />
    <When />
    <Where />
  </BackgroundShapes>
);

export default About;
