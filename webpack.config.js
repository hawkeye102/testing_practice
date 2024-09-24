const path = require('path');

module.exports = {
  entry: './src/index.js', // The entry point file
  output: {
    filename: 'bundle.js', // The output bundled file
    path: path.resolve(__dirname, 'dist'), // Output path
  },
  mode: 'development', // Set mode to development or production
  module: {
    rules: [
      {
        test: /\.js$/, // Transpile JavaScript files
        exclude: /node_modules/, // Exclude the node_modules directory
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'], // Use the env preset
          },
        },
      },
    ],
  },
};
