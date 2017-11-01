const path = require('path');
const common = require('./webpack.common.js');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Merge = require('webpack-merge');

module.exports = env => (Merge.multiple(common(env), {
  js: {
    entry: {
      browser: './browser.js',
    },
    module: {
      rules: [
        {
          test: /\.hbs$/,
          use: [
            {
              loader: 'handlebars-loader',
            },
          ],
        },
      ],
    },
    devtool: 'cheap-module-eval-source-map',
    devServer: {
      publicPath: '/',
      contentBase: path.join(__dirname, 'example'),
      watchContentBase: true,
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env': {
          'NODE_ENV': JSON.stringify('development')
        }
      }),
      new HtmlWebpackPlugin({
        title: '[nagato-testing]',
        hash: true,
        template: '../html/nagato-testing.hbs',
        chunks: [
          'nagato',
          'browser',
        ],
      }),
    ],
  },
}))

