var path = require('path');
var webpack = require('webpack');
var __dirname = '';

// Check command line args
var minimize = process.argv.indexOf('--minimize') !== -1;

var plugins = [];
if (minimize) {
  plugins.push(new webpack.optimize.UglifyJsPlugin());
}

module.exports = {
    entry: './app/assets/javascripts/composure-ui/app.jsx',
    output: {
        path: path.resolve(__dirname, 'app', 'assets', 'javascripts', 'dist'),
        filename: 'composure.bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                query: {
                    presets: ['babel-preset-es2015', 'babel-preset-react']
                }
            }
        ]
    },
    plugins: plugins,
    devtool: 'source-map'
};
