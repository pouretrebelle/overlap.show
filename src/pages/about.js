import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import StaticTitle from '../components/common/PageTitle/StaticTitle';
import About from '../components/About';

const AboutPage = ({ data }) => (
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
    <div style={{ height: '6rem' }} />
    <About />

  </div>
);

AboutPage.propTypes = {
  data: PropTypes.object,
};

export default AboutPage;

export const pageQuery = graphql`
  query AboutQuery {
    site {
      siteMetadata {
        title
        description
        keywords
      }
    }
  }
`;
