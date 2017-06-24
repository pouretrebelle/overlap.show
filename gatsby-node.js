var ExtractTextPlugin = require('extract-text-webpack-plugin');

exports.modifyWebpackConfig = function (config, stage) {
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
