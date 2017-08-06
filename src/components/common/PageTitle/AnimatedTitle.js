import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TweenLite from 'gsap';

import styles from './TitleText.styl';

import { randomMinMax, clamp, map } from '../../../utils/numberUtils';
import TitleText from './TitleText';

import {
  SHAPE_ANIM_DELAY_BETWEEN_REVEALS,
  SHAPE_ANIM_DURATION,
  SHAPE_ANIM_INITIAL_DELAY,
} from '../../../constants/animation';

class AnimatedTitle extends Component {

  constructor(props) {
    super(props);
    this.wrapperElement = undefined;
    this.currentThrough = 1;
    this.hasAnimatedIn = (this.props.shapeCount && this.props.isAnimated) ? false : true;
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
    this.setPosition();
  }

  getPositions = () => {
    const store = this.props.UIStore;

    this.positionY = {
      start: this.props.isAnimated ? store.windowHeight * 0.5: store.windowHeight * 0.025,
      end: store.windowHeight * 0.025,
    };
  }

  triggerFadeIn = (callback) => {
    TweenLite.delayedCall(SHAPE_ANIM_INITIAL_DELAY + this.props.shapeCount * SHAPE_ANIM_DELAY_BETWEEN_REVEALS, this.fadeIn, [callback]);
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
        onComplete: callback,
      },
    );

    this.hasAnimatedIn = true;
  }

  componentWillAppear(callback) {
    if (this.props.shapeCount && this.props.isAnimated) this.triggerFadeIn(callback);
  }

  componentWillEnter(callback) {
    if (this.props.shapeCount && this.props.isAnimated) this.triggerFadeIn(callback);
  }

  onWindowResized = () => {
    this.setPosition();
  }

  onWindowScrolled = () => {
    this.setPosition();

    if (!this.hasAnimatedIn) {
      TweenLite.killDelayedCallsTo(this.fadeIn);
      this.fadeIn();
    }
  }

  setPosition = () => {
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
    const { shapeCount, isAnimated, title } = this.props;

    return (
      <div
        ref={element => this.wrapperElement = element}
        className={styles.fixed}
        style={{
          opacity: (shapeCount && isAnimated) ? 0 : 1,
        }}>
        <TitleText title={title} />
      </div>
    );
  }
}

AnimatedTitle.propTypes = {
  UIStore: PropTypes.object,
  shapeCount: PropTypes.number,
  title: PropTypes.string,
  isAnimated: PropTypes.bool,
};

AnimatedTitle.defaultProps = {
  isAnimated: true,
};

export default AnimatedTitle;
