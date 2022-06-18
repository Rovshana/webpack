const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'test.js',
    path: path.resolve(__dirname, 'build'),
    clean: true
  },
  devServer: {
    static: './build',
  },
  // optimization: {
  //   runtimeChunk: 'single',
  // },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'hello html',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],

  }
};