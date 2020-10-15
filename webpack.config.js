const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const ASSET_PATH = process.env.ASSET_PATH || '/';
const isDev = process.env.NODE_ENV === 'development';
console.log('Is dev?', isDev);

module.exports = {
  context: path.resolve(__dirname, 'src'), // webpack working directory
  // entry: './src/index.js' // one entry point
  entry: { // multiple entry points
    main: './index.js', // named entry points
    analytics: './analytics.js'
  },
  mode: 'development', // default build mode
  output: { // output
    filename: 'js/[name].[contenthash].js', // file names pattern
    path: path.resolve(__dirname, 'dist'), // where to output 'em,
    publicPath: ASSET_PATH
  },
  resolve: { // resolve object
    extensions: ['.js', '.json', '.png'], // file extensions allowed to import without pointing the extension
    alias: { // aliases
      '@models': path.resolve(__dirname, 'src/models'), // create alias for models folder
      '@': path.resolve(__dirname, 'src') // create alias for src folder
    }
  },
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  },
  devServer: {
    port: 3000,
    hot: isDev
  },
  plugins: [ // webpack plugins
    new HTMLWebpackPlugin({ // plugin to work with html
      title: 'Webpack', // if html template not defined, use this title
      template: './index.html', // create html files from this template,
      minify: {
         collapseWhitespace: isDev
      }
    }),
    new CleanWebpackPlugin(), // plugin to clean dist directory
    new CopyWebpackPlugin({ // plugin to copy contents from one place to another
      patterns: [ // array of patterns
        {
          from: path.resolve(__dirname, 'src/favicon.ico'), // from
          to: path.resolve(__dirname, 'dist') // to
        }
      ]
    }),
    new MiniCssExtractPlugin({
      'process.env.ASSET_PATH': JSON.stringify(ASSET_PATH),
      filename: '[name].[contenthash].css'
    })
  ],
  module: { // loaders which allow webpack to work with various file types
    rules: [ // rules for webpack to follow
      { // single rule
        test: /\.css$/, // files passed this test will be loaded by loaders in use[]
        use: [ // webpack goes right to left
          {  // compiles css to a single file
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: ASSET_PATH,
              hmr: isDev,
              reloadAll: true
            }
          },
          // 'style-loader', // adds styles in html head tag, has to be installed
          'css-loader' // allows to import styles into JavaScript, has to be installed
        ]
      },
      {
        test: /\.(png|jpg|jpeg|svg|webp|gif)$/,
        use: [
          'file-loader'
        ]
      },
      {
        test: /\.(ttf|woff|woff2|eot)$/,
        use: [
          'file-loader'
        ]
      },
      {
        test: /\.xml$/,
        use: [
          'xml-loader'
        ]
      },
      {
        test: /\.csv$/,
        use: [
          'csv-loader'
        ]
      }
    ]
  }
}