import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import TransitionGroup from 'react-transition-group/TransitionGroup';

import styles from './BackgroundShapes.module.styl';

import { getOneOf } from '../../utils/numberUtils';
import AnimatedLetterPair from '../common/shapes/AnimatedLetterPair';
import SingleShape from '../common/SingleShape';
import Rectangle from '../common/shapes/Rectangle';
import Triangle from '../common/shapes/Triangle';

class BackgroundShapes extends Component {
  constructor(props) {
    super(props);

    this.availableShapes = [
      Rectangle,
      Triangle,
    ];
  }

  getRandomShape = (i) => {
    const Shape = getOneOf(this.availableShapes);
    const {
      useWhite,
      usePrimary,
      useSecondary,
    } = this.props;

    return (
      <SingleShape
        useWhite={useWhite}
        usePrimary={usePrimary}
        useSecondary={useSecondary}
        key={i}
      >
        <Shape />
      </SingleShape>
    );
  }

  render() {
    const {
      children,
      shapeCount,
      shapesWrapperClass,
      useWhite,
      usePrimary,
      useSecondary,
      useLetters,
    } = this.props;

    const pairs = useLetters ?
      Array.from({ length: shapeCount }, (v, k) => (
        <AnimatedLetterPair
          useWhite={useWhite}
          usePrimary={usePrimary}
          useSecondary={useSecondary}
          index={k}
          key={k}
        />
      ))
      :
      Array.from({ length: shapeCount }, (v, k) => this.getRandomShape(k));

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
  }
}

BackgroundShapes.propTypes = {
  children: PropTypes.node,
  shapeCount: PropTypes.number.isRequired,
  shapesWrapperClass: PropTypes.string,
  useWhite: PropTypes.bool,
  usePrimary: PropTypes.bool,
  useSecondary: PropTypes.bool,
  useLetters: PropTypes.bool,
};

export default BackgroundShapes;
