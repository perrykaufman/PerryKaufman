/* eslint-env node */

const path = require("path");
const VueLoaderPlugin = require("vue-loader/lib/plugin");

const webpackConfig = {
  mode: "none",
  module: {
    rules: [
      {
        test: /.vue$/,
        loader: "vue-loader",
        options: {
          loaders: {}
        }
      },
      {
        test: /\.css$/,
        use: ["vue-style-loader", "css-loader"]
      },
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: ["env"]
        }
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: "file-loader",
        options: {
          name: "[name].[ext]?[hash]"
        }
      }
    ]
  },
  plugins: [new VueLoaderPlugin()],
  resolve: {
    alias: {
      Layout: path.resolve(__dirname, "src/.vuepress/theme/Layout.vue"),
      Lib: path.resolve(__dirname, "src/.vuepress/theme/lib"),
      Src: path.resolve(__dirname, "src/"),
      Test: path.resolve(__dirname, "test/"),
      Theme: path.resolve(__dirname, "src/.vuepress/theme/")
    },
    extensions: [".js", ".vue"]
  }
};

module.exports = function(config) {
  config.set({
    basePath: "",
    frameworks: ["jasmine"],
    files: ["test/*.js"],
    exclude: [],
    webpack: webpackConfig,
    webpackMiddleware: {
      noInfo: true
    },
    preprocessors: {
      "test/*.js": ["webpack"]
    },
    reporters: ["kjhtml"], //http://localhost:9876/debug.html
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ["PhantomJS"],
    singleRun: false
  });
};
