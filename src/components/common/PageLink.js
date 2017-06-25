import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import { prefixLink } from 'gatsby-helpers';

const PageLink = ({ to, children, ...props }) => {
  // add a trailing slash if there is not one (to support SPA)
  let linkTo = to;
  if (to.substr(to.length-1) !== '/') {
    linkTo = to + '/';
  }
  const prefixedLink = prefixLink(linkTo);

  return (
    <Link to={prefixedLink} {...props}>
      {children}
    </Link>
  );
};

PageLink.propTypes = {
  to: PropTypes.string,
  children: PropTypes.node,
};

export default PageLink;
