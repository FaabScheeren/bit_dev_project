const path = require("path");
const BrowserSyncPlugin = require("browser-sync-webpack-plugin");


module.exports = {
  devtool: "source-map",

  // entry: {
  //   "js/index": path.resolve(__dirname, "src/index.js"),
  //   "js/index.min": path.resolve(__dirname, "src/index.js"),
  // },

  // output: {
  //   filename: "[name]-[hash:6].js",
  //   path: path.resolve(__dirname, "build"),
  // },

  resolve: {
    extensions: [".js", ".jsx", ".json"],
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              // presets: ['es2015'],
              plugins: [require("babel-plugin-transform-async-to-promises")],
            },
          },
        ],
        // loader : 'babel-loader',
      },
      {
        test: /\.scss$/,
        use: [
          "style-loader", // creates style nodes from JS strings
          "css-loader", // translates CSS into CommonJS
          "sass-loader", // compiles Sass to CSS
        ],
      },
      {
        test: /\.(jpg|png|gif)$/,
        loader: "url-loader",
      },
      {
        test: /\.svg$/,
        use: {
          loader: "svg-url-loader",
          options: {
            encoding: "base64",
          },
        },
      },
    ],
  },

  plugins: [
    new BrowserSyncPlugin(
      // BrowserSync options
      {
        host: "localhost",
        port: 8000,
        server: { baseDir: ["build"] },
      }
    ),
    // new ManifestPlugin(),
  ],
};
