const path = require("path");
const { version } = require("./package");
const { theme, styles } = require("./src/styleguide/style");
module.exports = {
  components: "src/styleguide/**/[A-Z]*.js",
  defaultExample: true,
  moduleAliases: {
    "rsg-example": path.resolve(__dirname, "src")
  },
  version,
  theme,
  styles,
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
