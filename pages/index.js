import React from 'react';
import Helmet from 'react-helmet';

import { config } from 'config';
import ShapeField from 'src/components/common/ShapeField';

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
    <ShapeField />
  </div>
);

export default IndexPage;
