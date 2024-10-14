const path = require('path');

module.exports = {
  entry: {
    index: './src/index.jsx', // Entrada principal
    form: './src/form.jsx',  // Entrada para o formulário
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js', // Saída dinâmica: main.js para index.js e form.js para form.js
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
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  target: 'electron-renderer',
};
