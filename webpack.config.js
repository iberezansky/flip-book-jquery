var webpack = require('webpack');
var path = require('path');

module.exports = function(env) {
  var debug = false;
  if(env) {
    debug = !!env.debug;
  }

  var commonPlugins = [
    new webpack.DefinePlugin({
      GLOBAL_LIBS: {
        jQuery: JSON.stringify(true),
        html2canvas: JSON.stringify(true),
        THREE: JSON.stringify(true),
        PDFJS: JSON.stringify(true),// don't set false. It isn't implemented
      },
      GLOBAL_PATHS: {
        pdfJsWorker: JSON.stringify('js/pdf.worker.js')
      },
      ENVIROMENT: {
        debug: JSON.stringify(debug)
      }
    })
  ];

  if(!debug) {
    commonPlugins.push(new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }));
  }

  return {
    context: __dirname,
    devtool: debug ? 'inline-sourcemap' : '',
    entry: ['./index.js'],
    output: {
      path: __dirname,
      filename: './dist/'+(debug ? 'flip-book.js': 'flip-book.min.js')
    },
    module: {
      loaders: [
        {
          test: /\.html$/,
          loader: 'raw-loader'
        },
        {
          test: /\.js$/,
          exclude: /(node_modules|bower_components)/,
          loader: 'babel-loader',
          query: {
            presets: [['es2015', {'loose': true}], 'stage-0'],
            plugins: ['transform-class-properties']
          }
        }
      ]
    },
    plugins: debug ? commonPlugins : [
      ...commonPlugins,
      new webpack.optimize.OccurrenceOrderPlugin(),
      new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
    ],
  };
}
