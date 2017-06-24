import React from 'react';
import '../src/styles/application.styl';

import PageLink from '../src/components/common/PageLink';

module.exports = React.createClass({
  propTypes () {
    return {
      children: React.PropTypes.any,
    };
  },
  render() {
    return (
      <div>
        <div className='site-header'>
          <PageLink to={'/'}>
            <h1>
              Barebones Starter
            </h1>
          </PageLink>
        </div>
        <div>
          {this.props.children}
        </div>
      </div>
    );
  },
});
