import React from 'react';

import styles from './About.module.styl';

import What from './What';
import When from './When';
import Where from './Where';
import Video from './Video';
import BackgroundShapes from '../common/BackgroundShapes';

const About = () => (
  <div>
    <Video />
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
  </div>
);

export default About;
