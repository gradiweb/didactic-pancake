/* eslint-disable */
const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

const JS_DIR = path.resolve(__dirname, './src');
const JS_ASSET = path.resolve(__dirname, './assets');

const entry = {
  theme: './src/templates/index.js',
  product: './src/templates/product.js',
  collection: './src/templates/collection.js',
  password: './src/templates/password.js',
  customer: './src/templates/customer.js',
  contact: './src/templates/contact.js',
  critical: './src/templates/critical.js',
  breadcrumbs: './assets/breadcrumbs.module.js',
  pagination: './assets/pagination.module.js',
  faq: './assets/faq-section.module.js',
  productcard: './assets/component-card-product.module.js',
  cart: './src/templates/cart.js'
}

const output = {
  filename: '[name].js',
  path: path.resolve(__dirname, 'assets'),
};

const rules = [
  {
    test: /\.js$/,
    include: [JS_DIR, JS_ASSET],
    exclude: /node_modules/,
    use: 'babel-loader',
  },
];

module.exports = {
  entry: entry,

  output: output,

  module: {
    rules: rules,
  },

  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin(), new CssMinimizerPlugin()],
  },
};
