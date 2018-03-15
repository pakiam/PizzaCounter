import path from 'path';

export default function makeWebpackConfig({
  watch = true,
  sourcemaps = false,
  debug = false
}) {
  return {
    entry: path.resolve('./app/scripts/app'),
    watch,
    debug,
    bail: false,
    profile: true,
    output: {
      path: path.resolve('./dist/assets/scripts/'),
      filename: 'app.min.js',
      pathinfo: false
    },
    devtool: (sourcemaps || !debug) ? '#source-map' : 'eval',
    resolve: {
      modulesDirectories: [
        'node_modules'
      ],
      extensions: ['.ts', '.tsx', '.js']
    },
    module: {
      loaders: [
        {
          test: /\.tsx?$/,
          loader: 'ts-loader',
          exclude: /node_modules/
        }
      ]
    }
  };
}
