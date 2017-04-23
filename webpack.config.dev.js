import path from 'path';

export default {
  entry: path.join(__dirname, '/client/index.js'),
  output: {
    path: '/'/* middle ware will serve the app from memory*/
  },
  module: {
    loaders: [
      test: /\.js$/,
      include: path.join(__dirname, 'client'),
      loaders: [ 'babel' ]
    ]
  },
  resolve: {
    extentions: ['', '.js'],
  }
}
