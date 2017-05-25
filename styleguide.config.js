const {createConfig} = require('@webpack-blocks/webpack2')
const babel = require('@webpack-blocks/babel6')
const path = require('path')

const webpackConfig = createConfig([
  babel()
])

webpackConfig.resolve.alias = {}
webpackConfig.resolve.alias['rsg-components/Wrapper'] = path.join(__dirname, 'src/styleguide/Wrapper')

module.exports = {
  skipComponentsWithoutExample: true,
  components: 'src/components/**/[A-Z]*.js',
  webpackConfig
}
