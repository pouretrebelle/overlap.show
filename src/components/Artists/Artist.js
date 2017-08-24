import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { observer, inject } from 'mobx-react';

import styles from './Artist.module.styl';

import BackgroundShapes from '../common/BackgroundShapes';
import ResponsiveImage from '../common/images/ResponsiveImage';

@inject('UIStore') @observer
class Artist extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { data, UIStore } = this.props;

    return (
      <BackgroundShapes
        shapeCount={UIStore.windowWidth * 0.02}
        shapesWrapperClass={styles.backgroundShapes}
        useWhite={false}
        usePrimary={true}
        useSecondary={true}
      >
        <div className={styles.wrapper}>
          <div className={styles.titleWrapper}>
            <h2 className={styles.name}>
              {data.frontmatter.name}
            </h2>
            { data.frontmatter.title && <h3 className={styles.title}>
              {data.frontmatter.title}
            </h3> }
          </div>
          <div className={styles.portrait}>
            { data.frontmatter.portrait && <ResponsiveImage
              imagePath={`portraits/${data.frontmatter.portrait}`}
              width={[518, 252, 264]}
              maxBreakpoint={1176}
              alt={data.frontmatter.name}
              className={styles.portraitImage}
            /> }
          </div>
          <div className={styles.bio} dangerouslySetInnerHTML={{ __html: data.html }} />
        </div>
      </BackgroundShapes>
    );
  }
}

Artist.propTypes = {
  data: PropTypes.object.isRequired,
  UIStore: PropTypes.object,
};

export default Artist;
