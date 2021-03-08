const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
module.exports = {
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'index_bundle.js',
      },
    plugins: [new HtmlWebpackPlugin()],
  };