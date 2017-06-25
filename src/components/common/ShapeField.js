import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { observer, inject } from 'mobx-react';
import TransitionGroup from 'react-transition-group/TransitionGroup';

import { getOneOf } from 'src/utils/numberUtils';

import ShowTitle from './ShowTitle';
import ClusterShapes from './ClusterShapes';
import Rectangle from './shapes/Rectangle';
import RectangleOutline from './shapes/RectangleOutline';
import RectangleBands from './shapes/RectangleBands';
import Triangle from './shapes/Triangle';
import TriangleOutlineLayered from './shapes/TriangleOutlineLayered';
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
      RectangleBands,
      Triangle,
      TriangleOutlineLayered,
      CircleGrid,
      LetterString,
      LetterString, // let's have double the letter strings
    ];
  }

  getRandomShape = (i) => {
    const Shape = getOneOf(this.availableShapes);

    return <Shape key={i}/>;
  }

  render() {
    const { UIStore } = this.props;

    const shapes = Array.from({ length: 20 }, (v, k) => this.getRandomShape(k));
    const pairs = Array.from({ length: 40 }, (v, k) => (
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
