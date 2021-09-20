const cli = require('./cli')

module.exports = (api, options) => {
  api.configureWebpack((config) => {
    config.resolve.alias['~b'] = __dirname + '/.framework'
    config.entry.app = ['./.framework/main.js']
  })

  api.chainWebpack((config) => {
    config.plugin('html').tap((args) => {
      args[0].template = __dirname + '/.framework/public/index.html'
      return args
    })
  })

  api.registerCommand(
    'components:generate',
    {
      description: 'Generates the framework files.',
      usage: 'vue-cli-service components:generate'
    },
    () => {
      cli()
    }
  )
}
