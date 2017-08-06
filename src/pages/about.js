import React from 'react';
import PropTypes from 'prop-types';
import graphql from 'graphql';
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

    <StaticTitle title={data.site.siteMetadata.shortTitle} />
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
        shortTitle
        title
        description
        keywords
      }
    }
  }
`;
