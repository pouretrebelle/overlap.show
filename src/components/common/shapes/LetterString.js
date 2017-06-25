import React, { Component } from 'react';
import classNames from 'classnames';

import styles from './LetterString.styl';

import { possibleLetterStringSymbols } from 'src/constants/ui';
import { randomZerodInt, randomMinMax, getOneOf } from 'src/utils/numberUtils';

class LetterString extends Component {

  constructor(props) {
    super(props);
    this.letterCount = 5 + randomZerodInt(20);
    this.fontSize = randomMinMax(25, 60);
    this.letter = getOneOf(possibleLetterStringSymbols);
  }

  render() {
    const wrapperStyle = {
      fontSize: this.fontSize,
    };
    const wrapperClasses = classNames({
      [styles.italic]: this.letter.italic,
      [styles.overlap]: this.letter.overlap,
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
