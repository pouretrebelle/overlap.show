import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { getOneOf } from 'src/utils/numberUtils';

import SingleShape from './SingleShape';
import Rectangle from './shapes/Rectangle';
import RectangleOutline from './shapes/RectangleOutline';
import Triangle from './shapes/Triangle';
import TriangleOutlineLayered from './shapes/TriangleOutlineLayered';
import CircleGrid from './shapes/CircleGrid';

class ShapeField extends Component {

  constructor(props) {
    super(props);
    this.availableShapes = [
      Rectangle,
      RectangleOutline,
      Triangle,
      TriangleOutlineLayered,
      CircleGrid,
    ];
  }

  getRandomShape = () => {
    const Shape = getOneOf(this.availableShapes);
    return <Shape/>
  }

  render() {
    const shapes = Array.from({ length: 15 }, (v, k) => (
      <SingleShape zIndex={k} key={k}>
        {this.getRandomShape()}
      </SingleShape>
    ));

    return (
      <div>
        {shapes}
      </div>
    );
  }
}

export default ShapeField;
