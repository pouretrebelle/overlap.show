import React from 'react';
import PropTypes from 'prop-types';
import graphql from 'graphql';
import Helmet from 'react-helmet';

import { filterAndSortArtists } from '../utils/contentUtils';

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

    <Home route={route} siteMetadata={data.site.siteMetadata} artists={filterAndSortArtists(data.allMarkdownRemark.edges)} />

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
        shortTitle
        title
        description
        keywords
      }
    }
    allMarkdownRemark {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            type
            name
            portrait
          }
        }
      }
    }
  }
`;
