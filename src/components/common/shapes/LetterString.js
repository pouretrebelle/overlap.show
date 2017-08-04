import React, { Component } from 'react';
import classNames from 'classnames';

import styles from './LetterString.styl';

import { possibleLetterStringSymbols } from '../../../constants/ui';
import { randomZerodInt, randomMinMax, getOneOf } from '../../../utils/numberUtils';

class LetterString extends Component {

  constructor(props) {
    super(props);
    this.letterCount = 5 + randomZerodInt(20);
    this.fontSize = randomMinMax(25, 80);
    this.letter = getOneOf(possibleLetterStringSymbols);
  }

  render() {
    const wrapperStyle = {
      fontSize: this.fontSize,
      lineHeight: this.letter.lineHeight || '',
      letterSpacing: this.letter.letterSpacing || '',
    };
    const wrapperClasses = classNames({
      [styles.overlap]: true,
      [styles.italic]: this.letter.italic,
      [styles.vertical]: this.letter.vertical,
      [styles.bold]: this.letter.bold,
    });

    const letters = Array.from({ length: this.letterCount }, (v, k) => (
      <span key={k}>{this.letter.symbol}</span>
    ));

    return (
      <div style={wrapperStyle} className={wrapperClasses}>
        {letters}
      </div>
    );
  }
}

export default LetterString;
