const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  js: {
    context: path.resolve(__dirname, 'js'),
    entry: {
      nagato: './nagato.js',
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'js/[name].js',
      // library: 'Nagato',
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          use: [
            {
              loader: 'expose-loader',
              options: 'Nagato',
            },
            {
              loader: 'babel-loader',
            },
          ],
          exclude: /node_modules/,
        },
      ],
    },
    plugins: [
      new CleanWebpackPlugin(
        ['dist'], { verbose: true, }
      ),
    ],
  },
};

