const cli = require('./cli')

module.exports = (api, options) => {
  api.configureWebpack((config) => {
    config.resolve.alias['~b'] = __dirname + '/../../../.components'
    config.entry.app = ['./.components/main.js']
  })

  api.chainWebpack((config) => {
    config.plugin('html').tap((args) => {
      args[0].template = './.components/public/index.html'
      return args
    })
  })

  api.registerCommand(
    'components:generate',
    {
      description: 'Generates the components files.',
      usage: 'vue-cli-service components:generate'
    },
    () => {
      cli()
    }
  )
}
