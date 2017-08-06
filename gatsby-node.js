var ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require('path');

exports.onCreateNode = ({ node, boundActionCreators, getNode }) => {
  const { createNodeField } = boundActionCreators;
  let slug;
  if (node.internal.type === 'MarkdownRemark') {
    const fileNode = getNode(node.parent);
    const parsedFilePath = path.parse(fileNode.relativePath);
    if (parsedFilePath.name !== 'index' && parsedFilePath.dir !== '') {
      slug = `/${parsedFilePath.dir}/${parsedFilePath.name}/`;
    } else if (parsedFilePath.dir === '') {
      slug = `/${parsedFilePath.name}/`;
    } else {
      slug = `/${parsedFilePath.dir}/`;
    }

    // Add slug as a field on the node.
    createNodeField({ node, name: 'slug', value: slug });
  }
};

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators;

  return new Promise((resolve, reject) => {
    const blogPost = path.resolve('src/templates/artist.js');
    // Query for all markdown "nodes" and for the slug we previously created.
    resolve(
      graphql(
        `
        {
          allMarkdownRemark {
            edges {
              node {
                fields {
                  slug
                }
              }
            }
          }
        }
      `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors);
          reject(result.errors);
        }

        // Create blog posts pages.
        result.data.allMarkdownRemark.edges.forEach(edge => {
          createPage({
            path: edge.node.fields.slug, // required
            component: blogPost,
            context: {
              slug: edge.node.fields.slug,
            },
          });
        });

        return;
      })
    );
  });
};

exports.modifyWebpackConfig = ({ config, stage }) => {
  config.removeLoader('css');

  if (stage == 'develop') {
    config.loader('css', function (cfg) {
      cfg.test = /\.styl$/;
      cfg.loader = 'style!css?minimize&sourceMap&modules!postcss!stylus-loader';

      return cfg;
    });
  }
  else {
    config.loader('styl', function (cfg) {
      cfg.test = /\.styl$/;
      cfg.loader = ExtractTextPlugin.extract([
        'css?minimize&sourceMap&modules',
        'postcss',
        'stylus-loader',
      ]);

      return cfg;
    });

    config.plugin('extract-styl',
      ExtractTextPlugin,
      ['styles.css']
    );
  }

  return config;
};
