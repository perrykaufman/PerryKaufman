const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  mode: 'none',
  module: {
    rules: [{
        test: /.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {}
        }
      },
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: ["env"] //TODO: Add specific target.
        }
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin()
  ],
  resolve: {
    alias: {
      Layout: path.resolve(__dirname, 'src/.vuepress/theme/Layout.vue'),
      Src: path.resolve(__dirname, 'src/'),
      Test: path.resolve(__dirname, 'test/'),
      Theme: path.resolve(__dirname, 'src/.vuepress/theme/'),
      Util: path.resolve(__dirname, 'src/.vuepress/theme/util.js')
    },
    extensions: ['.js', '.vue']
  }
}