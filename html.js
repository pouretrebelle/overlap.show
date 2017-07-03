import React from 'react';
import Helmet from 'react-helmet';
import { prefixLink } from 'gatsby-helpers';

import { config } from 'config';
import { CLOUDINARY_URL } from 'src/constants/urls';

const BUILD_TIME = new Date().getTime();

const HTML = (props) => {
  const head = Helmet.rewind();

  // only include bundle.js if we are running in production mode
  // and noProductionJavascript is set as true
  let js = <script src={prefixLink(`/bundle.js?t=${BUILD_TIME}`)} />;
  if (process.env.NODE_ENV === 'production' && config.noProductionJavascript ) {
    js = null;
  }

  // include link to the css file if we are running in production mode
  let css;
  if (process.env.NODE_ENV === 'production') {
    css = <link rel='stylesheet' href={prefixLink(`/styles.css?t=${BUILD_TIME}`)} />;
  }

  return (
    <html lang='en'>
      <head>
        <meta charSet='utf-8' />
        <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1.0'
        />
        <script src='https://maps.googleapis.com/maps/api/js?key=AIzaSyCogj0npcPg-pKkaRUUFjlonryjHMdqZio'></script>

        {head.title.toComponent()}

        <link rel='icon' type='image/png' href={`${CLOUDINARY_URL}/w_16/meta/favicon.png`} sizes='16x16'/>
        <link rel='icon' type='image/png' href={`${CLOUDINARY_URL}/w_32/meta/favicon.png`} sizes='32x32'/>
        <link rel='icon' type='image/png' href={`${CLOUDINARY_URL}/w_64/meta/favicon.png`} sizes='64x64'/>

        <link rel='image_src' type='image/png' href={`${CLOUDINARY_URL}/meta/ogfb.png`}/>
        <meta property='og:image' content={`${CLOUDINARY_URL}/meta/ogfb.png`}/>
        <meta property='og:image:width' content='1200'/>
        <meta property='og:image:height' content='630'/>
        <meta name="twitter:image" content={`${CLOUDINARY_URL}/meta/ogtw.png`}/>

        {head.meta.toComponent()}

        {css}
      </head>
      <body>
        <div id='react-mount' dangerouslySetInnerHTML={{ __html: props.body }} />
        {js}
        { process.env.NODE_ENV === 'production' && <script
          async
          dangerouslySetInnerHTML={{
            __html: '(function(i,s,o,g,r,a,m){i[\'GoogleAnalyticsObject\']=r;i[r]=i[r]||function(){\r\n  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),\r\n  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)\r\n  })(window,document,\'script\',\'https:\/\/www.google-analytics.com\/analytics.js\',\'ga\');\r\n\r\n  ga(\'create\', \'UA-102019354-1\', \'auto\');\r\n  ga(\'send\', \'pageview\');'
          }}
        /> }
      </body>
    </html>
  );
};

export default HTML;
