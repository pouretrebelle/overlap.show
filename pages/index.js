import React from 'react';
import Helmet from 'react-helmet';

import { config } from 'config';
import PageLink from '../src/components/common/PageLink';

const IndexPage = () => (
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
    <PageLink to={'/about'}>
      About Page
    </PageLink>
  </div>
);

export default IndexPage;
