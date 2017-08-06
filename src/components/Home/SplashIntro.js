import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { observer, inject } from 'mobx-react';
import TransitionGroup from 'react-transition-group/TransitionGroup';

import styles from './SplashIntro.styl';

import { getOneOf } from '../../utils/numberUtils';
import AnimatedTitle from '../common/PageTitle/AnimatedTitle';
import TitleUnderlay from '../common/PageTitle/TitleUnderlay';
import ClusterShapes from '../common/ClusterShapes';
import Rectangle from '../common/shapes/Rectangle';
import RectangleOutline from '../common/shapes/RectangleOutline';
import RectangleStack from '../common/shapes/RectangleStack';
import RectangleDiagStack from '../common/shapes/RectangleDiagStack';
import Triangle from '../common/shapes/Triangle';
import TriangleOutline from '../common/shapes/TriangleOutline';
import TriangleStack from '../common/shapes/TriangleStack';
import CircleGrid from '../common/shapes/CircleGrid';
import LetterString from '../common/shapes/LetterString';
import AnimatedLetterPair from '../common/shapes/AnimatedLetterPair';

@inject('UIStore') @observer
class SplashIntro extends Component {

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

    return <Shape key={i} />;
  }

  render() {
    const { UIStore, title } = this.props;

    // generate shapes
    let shapes = Array.from({ length: this.shapeCount }, (v, k) => this.getRandomShape(k));
    // add title underlay
    shapes.push(<TitleUnderlay x={0.5} y={0.5} key={this.shapeCount} />);

    const pairs = Array.from({ length: this.pairCount }, (v, k) => (
      <AnimatedLetterPair index={k} key={k} />
    ));

    return (
      <div className={styles.wrapper}>

        <TransitionGroup>

          <AnimatedTitle title={title} UIStore={UIStore} shapeCount={this.shapeCount} />

          <ClusterShapes UIStore={UIStore}>
            {shapes}
          </ClusterShapes>

          {pairs}

        </TransitionGroup>

      </div>
    );
  }
}

SplashIntro.propTypes = {
  UIStore: PropTypes.object,
  title: PropTypes.string,
};

export default SplashIntro;
