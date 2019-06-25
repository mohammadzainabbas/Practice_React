const path = require("path");
const { version } = require("./package");

module.exports = {
  components: "src/components/**/[A-Z]*.js",
  defaultExample: true,
  moduleAliases: {
    "rsg-example": path.resolve(__dirname, "src")
  },
  version,
  webpackConfig: {
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: "babel-loader"
        },
        {
          test: /\.css$/,
          loader: "style-loader!css-loader"
        }
      ]
    }
  }
};
