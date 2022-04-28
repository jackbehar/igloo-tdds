const path = require("path");
const webpack = require("webpack");

module.exports = {
    output: {
      path: path.resolve(__dirname, "build"),
      filename: "bundle.js",
      publicPath: "/"
    },
    resolve: {
      modules: [__dirname, "node_modules"],
      extensions: ["*", ".js", ".jsx", '.css']
    },
    devtool: "source-map",
    module: {
      rules: [
        {
          test: /(\.s[ac]ss$|\.css$)/,
          use: ['style-loader', 'css-loader'],
        },
        {
          test: /\.(jpe?g|gif|png|woff|woff2|eot|ttf|svg)(\?.*$|$)/,
          loader: 'file-loader?name=images/[name].[ext]',
        },
        {
          test: /\.svg$/,
          exclude: /node_modules/,
          loader: 'svg-react-loader'
        },
        {
          loader: "babel-loader",
          test: /\.js?$/,
          exclude: /node_modules/
        },
        { 
          enforce: "pre", 
          test: /\.js$/, 
          loader: "source-map-loader" 
        }
      ]
    }
};