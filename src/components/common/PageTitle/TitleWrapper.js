import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TweenLite from 'gsap';

import styles from './PageTitle.styl';

import { randomMinMax, clamp, map } from 'src/utils/numberUtils';

import {
  SHAPE_ANIM_DELAY_BETWEEN_REVEALS,
  SHAPE_ANIM_DURATION,
  SHAPE_ANIM_INITIAL_DELAY,
} from 'src/constants/animation';

class TitleWrapper extends Component {

  constructor(props) {
    super(props);
    this.wrapperElement = undefined;
    this.currentThrough = 0;
    this.positionY = {
      start: 0,
      end: 0,
    };
  }

  componentDidMount() {
    window.addEventListener('resize', this.onWindowResized);
    window.addEventListener('scroll', this.onWindowScrolled);
    this.initialisePosition();
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.onWindowResized);
    window.removeEventListener('scroll', this.onWindowScrolled);
  }

  initialisePosition() {
    this.getPositions();
    TweenLite.set(
      this.wrapperElement,
      {
        y: this.positionY.start,
      },
    );
  }

  getPositions = () => {
    const store = this.props.UIStore;

    this.positionY = {
      start: this.props.isAnimated ? store.windowHeight * 0.5: store.windowHeight * 0.025,
      end: store.windowHeight * 0.025,
    };
  }

  fadeIn = (callback) => {
    const store = this.props.UIStore;

    TweenLite.fromTo(
      this.wrapperElement,
      SHAPE_ANIM_DURATION,
      {
        opacity: 0,
        x: randomMinMax(-0.3, 0.3) * store.windowWidth,
      },
      {
        opacity: 1,
        x: 0,
        delay: SHAPE_ANIM_INITIAL_DELAY + this.props.shapeCount * SHAPE_ANIM_DELAY_BETWEEN_REVEALS,
        onComplete: callback,
      },
    );
  }

  componentWillAppear(callback) {
    if (this.props.shapeCount && this.props.isAnimated) this.fadeIn(callback);
  }

  componentWillEnter(callback) {
    if (this.props.shapeCount && this.props.isAnimated) this.fadeIn(callback);
  }

  onWindowResized = () => {
    this.onWindowScrolled();
  }

  onWindowScrolled = () => {
    const store = this.props.UIStore;
    const through = clamp(store.scrollTop / store.windowHeight, 0, 1);

    // don't animate if nothing's changed
    if (through == this.currentThrough || !this.props.isAnimated) return;
    this.currentThrough = through;

    TweenLite.set(
      this.wrapperElement,
      {
        y: map(through, this.positionY.start, this.positionY.end),
      },
    );
  }

  render() {
    const { children } = this.props;

    return (
      <div ref={element => this.wrapperElement = element} className={styles.fixed}>
        {children}
      </div>
    );
  }
}

TitleWrapper.propTypes = {
  children: PropTypes.node,
  UIStore: PropTypes.object,
  shapeCount: PropTypes.number,
  isAnimated: PropTypes.bool,
};

TitleWrapper.defaultProps = {
  isAnimated: true,
};

export default TitleWrapper;
