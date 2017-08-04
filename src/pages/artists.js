import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import { getArtistsFromRoute } from '../utils/contentUtils';
import StaticTitle from '../components/common/PageTitle/StaticTitle';
import ArtistList from '../components/Artists/ArtistList';

const ArtistsPage = ({ route, data }) => (
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

    <StaticTitle />
    <div style={{height: '6rem'}} />
    <ArtistList artists={getArtistsFromRoute(route)}/>

  </div>
);

ArtistsPage.propTypes = {
  route: PropTypes.object,
  data: PropTypes.object,
};

export default ArtistsPage;

export const pageQuery = graphql`
  query ArtistsQuery {
    site {
      siteMetadata {
        title
        description
        keywords
      }
    }
  }
`;
