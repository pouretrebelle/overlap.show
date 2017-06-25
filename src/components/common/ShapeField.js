import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TransitionGroup from 'react-transition-group/TransitionGroup';

import { getOneOf, randomMax } from 'src/utils/numberUtils';

import SingleShape from './SingleShape';
import Rectangle from './shapes/Rectangle';
import RectangleOutline from './shapes/RectangleOutline';
import RectangleBands from './shapes/RectangleBands';
import Triangle from './shapes/Triangle';
import TriangleOutlineLayered from './shapes/TriangleOutlineLayered';
import CircleGrid from './shapes/CircleGrid';
import LetterString from './shapes/LetterString';
import AnimatedLetterPair from './shapes/AnimatedLetterPair';

class ShapeField extends Component {

  constructor(props) {
    super(props);
    this.availableShapes = [
      Rectangle,
      RectangleOutline,
      RectangleBands,
      Triangle,
      TriangleOutlineLayered,
      CircleGrid,
      LetterString,
      LetterString, // let's have double the letter strings
    ];
  }

  getRandomShape = () => {
    const Shape = getOneOf(this.availableShapes);
    return <Shape/>
  }

  render() {
    const shapes = Array.from({ length: 20 }, (v, k) => (
      <SingleShape zIndex={k} key={k}>
        {this.getRandomShape()}
      </SingleShape>
    ));
    const pairs = Array.from({ length: 40 }, (v, k) => (
      <AnimatedLetterPair index={k} key={k} />
    ));

    return (
      <div>

        <TransitionGroup>
          {pairs}
        </TransitionGroup>

        {shapes}

      </div>
    );
  }
}

export default ShapeField;
