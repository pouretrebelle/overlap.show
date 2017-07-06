import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { observer, inject } from 'mobx-react';
import TransitionGroup from 'react-transition-group/TransitionGroup';

import styles from './SplashIntro.styl';

import { getOneOf } from 'src/utils/numberUtils';
import TitleWrapper from 'src/components/common/PageTitle/TitleWrapper';
import TitleText from 'src/components/common/PageTitle/TitleText';
import Underlay from 'src/components/common/PageTitle/Underlay';
import ClusterShapes from 'src/components/common/ClusterShapes';
import Rectangle from 'src/components/common/shapes/Rectangle';
import RectangleOutline from 'src/components/common/shapes/RectangleOutline';
import RectangleStack from 'src/components/common/shapes/RectangleStack';
import RectangleDiagStack from 'src/components/common/shapes/RectangleDiagStack';
import Triangle from 'src/components/common/shapes/Triangle';
import TriangleOutline from 'src/components/common/shapes/TriangleOutline';
import TriangleStack from 'src/components/common/shapes/TriangleStack';
import CircleGrid from 'src/components/common/shapes/CircleGrid';
import LetterString from 'src/components/common/shapes/LetterString';
import AnimatedLetterPair from 'src/components/common/shapes/AnimatedLetterPair';

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
    const { UIStore } = this.props;
    const shapes = Array.from({ length: this.shapeCount }, (v, k) => this.getRandomShape(k));
    const pairs = Array.from({ length: this.pairCount }, (v, k) => (
      <AnimatedLetterPair index={k} key={k} />
    ));

    return (
      <div className={styles.wrapper}>

        <TransitionGroup>


          <TitleWrapper UIStore={UIStore} shapeCount={this.shapeCount} zIndex={1}>
            <TitleText />
            <Underlay />
          </TitleWrapper>

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
};

export default SplashIntro;
