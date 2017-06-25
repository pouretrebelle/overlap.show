import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TweenLite } from 'gsap';
import classNames from 'classnames';

import styles from './AnimatedLetterPair.styl';

import { possibleLetterPairSymbols } from 'src/constants/ui';
import { randomZerodInt, randomMinMax, getOneOf } from 'src/utils/numberUtils';
import SingleShape from '../SingleShape';

const DELAY_BETWEEN_PAIRS = 0.05;

class AnimatedLetterPair extends Component {

  constructor(props) {
    super(props);

    this.fontSize = randomMinMax(40, 60);
    this.rotation = randomZerodInt(4);
    this.firstLetter = getOneOf(possibleLetterPairSymbols);
    this.secondLetter = getOneOf(possibleLetterPairSymbols);

    this.firstLetterElement = undefined;
    this.secondLetterElement = undefined;
    this.wrapperElement = undefined;
  }

  fadeIn = (callback) => {
    TweenLite.fromTo(
      this.wrapperElement,
      1,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        delay: this.props.index * DELAY_BETWEEN_PAIRS,
        onComplete: () => {
          callback();
        },
      }
    );
    TweenLite.fromTo(
      [
        this.firstLetterElement,
        this.secondLetterElement,
      ],
      1,
      {
        x: (i) => {
          return i ? -15 : 15;
        },
      },
      {
        x: 0,
        delay: this.props.index * DELAY_BETWEEN_PAIRS,
      }
    );
  }

  componentWillAppear(callback) {
    this.fadeIn(callback);
  }

  componentWillEnter(callback) {
    this.fadeIn(callback);
  }

  render() {
    const wrapperStyle = {
      fontSize: this.fontSize,
    };
    const wrapperClasses = classNames({
      [styles.letterWrapper]: true,
      [styles[`rotate${this.rotation}`]]: true,
    });

    return (
      <div ref={element => this.wrapperElement = element}>
        <SingleShape zIndex={20} sometimesWhite={true}>
          <div style={wrapperStyle} className={wrapperClasses}>
            <span ref={element => this.firstLetterElement = element} className={styles.letter}>
              {this.firstLetter}
            </span>
            <span ref={element => this.secondLetterElement = element} className={styles.letter}>
              {this.secondLetter}
            </span>
          </div>
        </SingleShape>
      </div>
    );
  }
}

AnimatedLetterPair.propTypes = {
  index: PropTypes.number.isRequired,
};

export default AnimatedLetterPair;
