import React from 'react';
import Helmet from 'react-helmet';

import { config } from 'config';
import StaticTitle from 'src/components/common/PageTitle/StaticTitle';
import About from 'src/components/About';

const AboutPage = () => (
  <div>
    <Helmet
      title={config.siteTitle}
      meta={[
        {
          'name': 'description',
          'content': config.siteDescription,
        },
        {
          'name': 'keywords',
          'content': config.siteKeywords,
        },
      ]}
    />

    <StaticTitle />
    <div style={{height: '6rem'}} />
    <About />

  </div>
);

export default AboutPage;
