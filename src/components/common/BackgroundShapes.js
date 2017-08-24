import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import TransitionGroup from 'react-transition-group/TransitionGroup';

import styles from './BackgroundShapes.module.styl';

import AnimatedLetterPair from '../common/shapes/AnimatedLetterPair';

const BackgroundShapes = ({
  children,
  shapeCount,
  shapesWrapperClass,
}) => {

  const pairs = Array.from({ length: shapeCount }, (v, k) => (
    <AnimatedLetterPair sometimesWhite={false} index={k} key={k} />
  ));

  const shapesWrapperClasses = classNames({
    [styles.shapesWrapper]: true,
    [shapesWrapperClass]: !!shapesWrapperClass,
  });

  return (
    <div className={styles.wrapper}>
      <div className={shapesWrapperClasses}>

        <TransitionGroup>
          {pairs}
        </TransitionGroup>

      </div>
      {children}
    </div>
  );
};

BackgroundShapes.propTypes = {
  children: PropTypes.node,
  shapeCount: PropTypes.number.isRequired,
  shapesWrapperClass: PropTypes.string,
};

export default BackgroundShapes;
