import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { observer, inject } from 'mobx-react';
import TransitionGroup from 'react-transition-group/TransitionGroup';

import styles from './ShapeField.styl';

import { getOneOf } from 'src/utils/numberUtils';
import TitleWrapper from './PageTitle/TitleWrapper';
import PageTitle from './PageTitle';
import Underlay from './PageTitle/Underlay';
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
    this.shapeCount = 5 + Math.floor(this.props.UIStore.windowMin * 0.02);
    this.pairCount = 10 + Math.floor(this.props.UIStore.windowMin * 0.05);
  }

  getRandomShape = (i) => {
    const Shape = getOneOf(this.availableShapes);

    return <Shape key={i}/>;
  }

  render() {
    const { UIStore } = this.props;
    const shapes = Array.from({ length: this.shapeCount }, (v, k) => this.getRandomShape(k));
    const pairs = Array.from({ length: this.pairCount }, (v, k) => (
      <AnimatedLetterPair index={k} key={k} />
    ));

    return (
      <div className={styles.wrapper}>

        <TransitionGroup>

          <TitleWrapper UIStore={UIStore} shapeCount={this.shapeCount}>
            <Underlay />
          </TitleWrapper>

          <ClusterShapes UIStore={UIStore}>
            {shapes}
          </ClusterShapes>

          {pairs}

          <TitleWrapper UIStore={UIStore}>
            <PageTitle/>
          </TitleWrapper>

        </TransitionGroup>

      </div>
    );
  }
}

ShapeField.propTypes = {
  UIStore: PropTypes.object,
};

export default ShapeField;
