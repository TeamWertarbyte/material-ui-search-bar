const { createConfig, babel } = require("webpack-blocks");
const path = require("path");

module.exports = {
  skipComponentsWithoutExample: true,
  components: "src/components/**/[A-Z]*.js",
  webpackConfig: createConfig([babel()]),
  styleguideComponents: {
    Wrapper: path.join(__dirname, "src/styleguide/Wrapper"),
  }
};
