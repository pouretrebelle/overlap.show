import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Home from '../components/Home';

const IndexPage = ({ route, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        {
          'name': 'description',
          'content': data.site.siteMetadata.description,
        },
        {
          'name': 'keywords',
          'content': data.site.siteMetadata.keywords,
        },
      ]}
    />

    <Home route={route} />

  </div>
);

IndexPage.propTypes = {
  route: PropTypes.object,
  data: PropTypes.object,
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
        description
        keywords
      }
    }
  }
`;
