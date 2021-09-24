const fs = require('fs')
const rimraf = require('rimraf')

module.exports = (api, options) => {
  api.render('./template', {
    ...options,
    name: api.rootOptions.projectName
  })

  api.extendPackage({
    author: options.author + ' <' + options.mail + '>',
    license: options.license,
    scripts: {
      watch: 'vue-cli-service serve',
      'components:generate': 'vue-cli-service components:generate'
    },
  })

  api.onCreateComplete(() => {
    let dirs = [
      'src/assets',
      'src/components',
      'src/router',
      'tests/e2e/specs'
    ]
    let files = [
      'public/index.html',
      'src/assets/logo.png',
      'src/components/HelloWorld.vue',
      'src/views/About.vue',
      'src/views/Home.vue',
      'src/router/index.js',
      'src/App.vue',
      'src/i18n.js',
      'src/main.js',
      'src/registerServiceWorker.js',
      'tests/e2e/specs/test.js'
    ]

    files.forEach(element => {
      if (fs.existsSync(api.resolve() + '/' + element)) {
        fs.unlinkSync(api.resolve() + '/' + element)
      }
    })
    dirs.forEach(element => {
      if (fs.existsSync(api.resolve() + '/' + element)) {
        rimraf(api.resolve() + element, (e) => {
          if (e) console.log(e)
        })
      }
    })
  })

  api.exitLog('Run yarn components:generate', 'info')
  api.exitLog('Add missing details to vue.config.js.', 'info')
  api.exitLog('Find out more about OpenSource licenses at https://opensource.org/licenses .', 'info')
}
