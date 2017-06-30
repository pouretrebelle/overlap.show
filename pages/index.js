import React from 'react';
import Helmet from 'react-helmet';

import { config } from 'config';
import ShapeField from 'src/components/common/ShapeField';
import What from 'src/components/About/What';
import When from 'src/components/About/When';
import Where from 'src/components/About/Where';

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

    <What />
    <When />
    <Where />

  </div>
);

export default IndexPage;
