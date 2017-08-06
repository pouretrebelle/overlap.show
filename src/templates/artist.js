import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import StaticTitle from '../components/common/PageTitle/StaticTitle';
import Artist from '../components/Artists/Artist';

const ArtistPage = ({ data }) => {
  const artistData = data.markdownRemark;

  const description = artistData.frontmatter.description || '';
  const keywords = artistData.frontmatter.keywords || '';
  const meta = [
    {'name': 'description', 'content': description},
    {'name': 'keywords', 'content': keywords },
  ];

  return (
    <div>

      <Helmet
        title={`${data.site.siteMetadata.title} | ${artistData.frontmatter.title}`}
        meta={meta}
      />

      <StaticTitle title={data.site.siteMetadata.shortTitle} />

      <Artist data={artistData} />

    </div>
  );
};

ArtistPage.propTypes = {
  route: PropTypes.object,
  data: PropTypes.object,
};

export default ArtistPage;

export const pageQuery = graphql`
  query ArtistBySlug($slug: String!) {
    site {
      siteMetadata {
        shortTitle
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug }}) {
      html
      frontmatter {
        name
        portrait
      }
    }
  }
`;
