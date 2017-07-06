import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { observer, inject } from 'mobx-react';

import styles from './TitleText.styl';

import TitleWrapper from './TitleWrapper';
import TitleText from './TitleText';

@inject('UIStore') @observer
class StaticTitle extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { UIStore } = this.props;

    return (
      <header className={styles.staticHeader}>
        <TitleWrapper UIStore={UIStore} zIndex={1} isAnimated={false}>
          <TitleText />
        </TitleWrapper>
      </header>
    );
  }
}

StaticTitle.propTypes = {
  UIStore: PropTypes.object,
};

export default StaticTitle;
