const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const GlobalizePlugin = require('globalize-webpack-plugin');

const outputDirectory = 'dist';
const production = process.env.NODE_ENV === 'production';

module.exports = {
  entry: ['babel-polyfill', './src/client/index.js'],
  output: {
    path: path.join(__dirname, outputDirectory),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg|gif)$/,
        loader: 'url-loader?limit=100000'
      }
    ]
  },
  devServer: {
    port: 3000,
    open: true,
    proxy: {
      '/api': 'http://localhost:8080'
    }
  },
  plugins: [
    new CleanWebpackPlugin([outputDirectory]),
    new HtmlWebpackPlugin({
      template: './public/index.html',
      favicon: './public/favicon.ico'
    }),
    new GlobalizePlugin({
      production, // true: production, false: development
      developmentLocale: 'fr', // locale to be used for development.
      supportedLocales: ['fr', 'en', 'es'], // locales that should be built support for.
      // cldr() {}, // CLDR data (optional)
      // messages: 'messages/[locale].json', // messages (optional)
      // timeZoneData() {}, // time zone data (optional)
      output: 'globalize-compiled-data-[locale].[hash].js' // build output.
      // moduleFilter: filterFunction, // filter for modules to exclude from processing
      // tmpdirBase: '.' // optional for non create-react-apps
    })
  ]
};
