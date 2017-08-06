import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import { filterAndSortArtists } from '../utils/contentUtils';

import StaticTitle from '../components/common/PageTitle/StaticTitle';
import ArtistList from '../components/Artists/ArtistList';

const ArtistsPage = ({ data }) => (
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

    <StaticTitle title={data.site.siteMetadata.shortTitle} />
    <div style={{ height: '6rem' }} />
    <ArtistList artists={filterAndSortArtists(data.allMarkdownRemark.edges)}/>

  </div>
);

ArtistsPage.propTypes = {
  data: PropTypes.object,
};

export default ArtistsPage;

export const pageQuery = graphql`
  query ArtistsQuery {
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
