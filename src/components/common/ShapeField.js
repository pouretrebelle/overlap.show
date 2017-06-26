import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { observer, inject } from 'mobx-react';
import TransitionGroup from 'react-transition-group/TransitionGroup';

import { getOneOf } from 'src/utils/numberUtils';

import ShowTitle from './ShowTitle';
import ClusterShapes from './ClusterShapes';
import Rectangle from './shapes/Rectangle';
import RectangleOutline from './shapes/RectangleOutline';
import RectangleStack from './shapes/RectangleStack';
import RectangleDiagStack from './shapes/RectangleDiagStack';
import Triangle from './shapes/Triangle';
import TriangleOutline from './shapes/TriangleOutline';
import TriangleStack from './shapes/TriangleStack';
import CircleGrid from './shapes/CircleGrid';
import LetterString from './shapes/LetterString';
import AnimatedLetterPair from './shapes/AnimatedLetterPair';

@inject('UIStore') @observer
class ShapeField extends Component {

  constructor(props) {
    super(props);
    this.availableShapes = [
      Rectangle,
      RectangleOutline,
      RectangleStack,
      RectangleDiagStack,
      Triangle,
      TriangleOutline,
      TriangleStack,
      CircleGrid,
      LetterString,
      LetterString, // let's have double the letter strings
      LetterString, // scratch that, triple
    ];

    // use screen size to decide quantity of components
    this.shapeQuantity = 5 + Math.floor(this.props.UIStore.windowMin * 0.02);
    this.pairQuantity = 10 + Math.floor(this.props.UIStore.windowMin * 0.05);
  }

  getRandomShape = (i) => {
    const Shape = getOneOf(this.availableShapes);

    return <Shape key={i}/>;
  }

  render() {
    const { UIStore } = this.props;
    const shapes = Array.from({ length: this.shapeQuantity }, (v, k) => this.getRandomShape(k));
    const pairs = Array.from({ length: this.pairQuantity }, (v, k) => (
      <AnimatedLetterPair index={k} key={k} />
    ));

    return (
      <div>

        <ShowTitle/>

        <TransitionGroup>
          <ClusterShapes UIStore={UIStore}>
            {shapes}
          </ClusterShapes>
        </TransitionGroup>

        <TransitionGroup>
          {pairs}
        </TransitionGroup>

      </div>
    );
  }
}

ShapeField.propTypes = {
  UIStore: PropTypes.object,
};

export default ShapeField;
