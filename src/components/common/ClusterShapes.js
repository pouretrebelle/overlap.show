import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TweenLite from 'gsap';

import styles from './ClusterShapes.styl';

import { randomMax, randomMinMax } from 'src/utils/numberUtils';
import SingleShape from './SingleShape';
import Rectangle from './shapes/Rectangle';

const ANIMATION_DELAY_BETWEEN_REVEALS = 0.1;
const ANIMATION_DURATION = 1;
const ANIMATION_INITIAL_DELAY = 2;

const getRandomPosition = (store) => {
  const x = Math.random();
  const y = 0.5 + randomMinMax(-150/store.windowHeight, 150/store.windowHeight);

  return {
    start: {
      x: x + (x - 0.5),
      y: y,// + (y - store.windowHeight/2),
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
    const store = this.props.UIStore;

    // make array of shapes
    // generate random position
    // setup ref to wrapper element
    this.shapes = this.props.children.map(child => {
      return {
        shape: child,
        position: getRandomPosition(store),
        element: undefined,
      };
    });

    // add underlying rectangle so title is definitely visible
    const underlayWidth = (store.windowWidth < 550) ? store.windowWidth : store.windowMin * 0.7;
    const underlayHeight = (store.windowWidth < 550) ? store.windowWidth*0.1 : store.windowMin * 0.05;
    this.shapes.push({
      shape: (<Rectangle width={underlayWidth} height={underlayHeight}/>),
      position: {
        start: {
          x: 0.2 + randomMinMax(-0.3, 0.3),
          y: 0.5,
        },
        end: {
          x: 0.5,
          y: 0.5,
        },
      },
      element: undefined,
    });

    window.addEventListener('resize', this.onWindowResized);
  }

  fadeIn = (callback) => {
    const store = this.props.UIStore;

    this.shapes.forEach((item, i) => {
      TweenLite.fromTo(
        item.element,
        ANIMATION_DURATION,
        {
          opacity: 0,
          x: item.position.start.x * store.windowWidth,
          y: item.position.start.y * store.windowHeight,
        },
        {
          opacity: 1,
          x: item.position.end.x * store.windowWidth,
          y: item.position.end.y * store.windowHeight,
          delay: ANIMATION_INITIAL_DELAY + i * ANIMATION_DELAY_BETWEEN_REVEALS,
          onComplete: () => {
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

  onWindowResized = () => {
    const store = this.props.UIStore;

    this.shapes.forEach((item) => {
      TweenLite.set(
        item.element,
        {
          x: item.position.end.x * store.windowWidth,
          y: item.position.end.y * store.windowHeight,
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
