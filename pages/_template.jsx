import React from 'react';
import PropTypes from 'prop-types';
import '../src/styles/application.styl';

import Navigation from 'src/components/common/Navigation';
import Footer from 'src/components/common/Footer';

const Template = ({ children }) => (
  <div>
    <Navigation />
    {children}
    <Footer />
  </div>
);

Template.propTypes = {
  children: PropTypes.node,
};

export default Template;
