const path = require('path');

module.exports = {
  entry: {
    index: './src/index.jsx', // Main entry point
    form: './src/form.jsx',   // Entry point for the form
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js', // Dynamic output: index.js for index and form.js for form
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/, // Rule to handle CSS files
        use: ['style-loader', 'css-loader'], // Loaders for CSS
      },
      {
        test: /\.scss$/, // Rule to handle SCSS files
        use: [
          'style-loader', // Injects styles into the DOM
          'css-loader',   // Translates CSS into CommonJS
          'sass-loader',  // Compiles Sass to CSS
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  target: 'electron-renderer',
};
  
