import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import styles from './LetterPair.styl';

import { possibleLetterPairSymbols } from 'src/constants/ui';
import { randomZerodInt, randomMinMax, getOneOf } from 'src/utils/numberUtils';

class LetterPair extends Component {

  constructor(props) {
    super(props);
    this.fontSize = randomMinMax(40, 60);
    this.rotation = randomZerodInt(4);
    this.firstLetter = getOneOf(possibleLetterPairSymbols);
    this.secondLetter = getOneOf(possibleLetterPairSymbols);
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
      <div style={wrapperStyle} className={wrapperClasses}>
        {this.firstLetter}
        {this.secondLetter}
      </div>
    );
  }
}

export default LetterPair;
