import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TweenLite from 'gsap';

import styles from './ClusterShapes.styl';

import { randomMinMax } from 'src/utils/numberUtils';
import SingleShape from './SingleShape';

import {
  SHAPE_ANIM_DELAY_BETWEEN_REVEALS,
  SHAPE_ANIM_DURATION,
  SHAPE_ANIM_INITIAL_DELAY,
  ANIMATION_BREAKPOINT,
} from 'src/constants/animation';

const getRandomPosition = () => {
  const x = randomMinMax(0.1, 0.9);
  const y = randomMinMax(0.1, 0.9);

  return {
    start: {
      x: x + (x - 0.5),
      y: y,
    },
    end: {
      x: x,
      y: y,
    },
  };
};

class ClusterShapes extends Component {

  constructor(props) {
    super(props);
    // make array of shapes
    // generate random position
    // setup ref to wrapper element
    this.shapes = this.props.children.map(child => {
      return {
        shape: child,
        position: getRandomPosition(),
        element: undefined,
        initialAnimationComplete: false,
      };
    });
  }

  componentDidMount() {
    window.addEventListener('resize', this.onWindowResized);
    window.addEventListener('scroll', this.onWindowScrolled);
    window.addEventListener('mousemove', this.onMouseMoved);
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.onWindowResized);
    window.removeEventListener('scroll', this.onWindowScrolled);
    window.removeEventListener('mousemove', this.onMouseMoved);
  }

  fadeIn = (callback) => {
    const store = this.props.UIStore;

    this.shapes.forEach((item, i) => {
      TweenLite.fromTo(
        item.element,
        SHAPE_ANIM_DURATION,
        {
          opacity: 0,
          x: item.position.start.x * store.windowWidth,
          y: item.position.start.y * store.windowHeight,
        },
        {
          opacity: 1,
          x: item.position.end.x * store.windowWidth,
          y: item.position.end.y * store.windowHeight,
          delay: SHAPE_ANIM_INITIAL_DELAY + i * SHAPE_ANIM_DELAY_BETWEEN_REVEALS,
          onComplete: () => {
            item.initialAnimationComplete = true;
            callback();
          },
        },
      );
    });
  }

  componentWillAppear(callback) {
    this.fadeIn(callback);
  }

  componentWillEnter(callback) {
    this.fadeIn(callback);
  }

  getPositionX = (item, store, i) => (
    (store.windowWidth > ANIMATION_BREAKPOINT && i) ?
      (item.position.end.x * store.windowWidth + (store.mouseX - store.windowWidth * 0.5) * 0.002 * Math.pow((this.shapes.length - i + 1), 1.5))
      :
      (item.position.end.x * store.windowWidth)
  );

  getPositionY = (item, store, i) => (
    (store.windowWidth > ANIMATION_BREAKPOINT && i) ?
      (item.position.end.y * store.windowHeight - (store.scrollTop) * 0.01 * (this.shapes.length - i + 1))
      :
      (item.position.end.y * store.windowHeight)
  );

  getCurrentPosition = (item, store, i) => (
    {
      x: this.getPositionX(item, store, i),
      y: this.getPositionY(item, store, i),
    }
  )

  onWindowResized = () => {
    this.shapes.forEach((item) => {
      TweenLite.set(
        item.element,
        this.getCurrentPosition(item, this.props.UIStore),
      );
    });
  }

  onMouseMoved = () => {
    const store = this.props.UIStore;
    if (store.windowWidth < ANIMATION_BREAKPOINT) return;

    this.shapes.forEach((item, i) => {
      // only jump into mouse position after initial animation
      if (!item.initialAnimationComplete) return;

      TweenLite.to(
        item.element,
        1,
        {
          x: this.getPositionX(item, this.props.UIStore, i),
        },
      );
    });
  }

  onWindowScrolled = () => {
    const store = this.props.UIStore;
    if (store.windowWidth < ANIMATION_BREAKPOINT) return;

    this.shapes.forEach((item, i) => {
      // only jump into mouse position after initial animation
      if (!item.initialAnimationComplete) return;

      TweenLite.set(
        item.element,
        {
          y: this.getPositionY(item, this.props.UIStore, i),
        },
      );
    });
  }

  render() {
    const { children, UIStore, ...props } = this.props; // eslint-disable-line no-unused-vars

    const shapes = this.shapes.map((child, i) => (
      <div
        ref={element => this.shapes[i].element = element}
        key={i}
        className={styles.shape}
      >
        <SingleShape
          x={0}
          y={0}
          {...props}
        >
          {child.shape}
        </SingleShape>
      </div>
    )).reverse(); // reverse forces underlay

    return (
      <div>
        {shapes}
      </div>
    );
  }
}

ClusterShapes.propTypes = {
  children: PropTypes.node.isRequired,
  UIStore: PropTypes.object,
};

export default ClusterShapes;
