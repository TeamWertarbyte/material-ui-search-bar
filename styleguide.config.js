const { createConfig, babel } = require("webpack-blocks");

module.exports = {
  skipComponentsWithoutExample: true,
  components: "src/components/**/[A-Z]*.js",
  webpackConfig: createConfig([babel()]),
};
