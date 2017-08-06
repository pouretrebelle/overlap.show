import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import StaticTitle from '../components/common/PageTitle/StaticTitle';
import Artist from '../components/Artists/Artist';

const ArtistPage = ({ data }) => {
  const page = data.markdownRemark;

  const description = page.description || '';
  const keywords = page.keywords || '';
  const meta = [
    {'name': 'description', 'content': description},
    {'name': 'keywords', 'content': keywords },
  ];

  return (
    <div>

      <Helmet
        title={`${data.site.siteMetadata.title} | ${page.title}`}
        meta={meta}
      />

      <StaticTitle />

      <Artist page={page} />

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
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug }}) {
      html
      frontmatter {
        title
      }
    }
  }
`;
