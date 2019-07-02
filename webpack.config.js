const path = require('path');

module.exports = {
  entry: './src/js/jquery.main.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  }
};