import React from 'react';
import PropTypes from 'prop-types';
import '../src/styles/application.styl';

const Template = ({ children }) => (
  <div>{children}</div>
);

Template.propTypes = {
  children: PropTypes.node,
};

export default Template;
