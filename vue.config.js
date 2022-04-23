const webpack = require('webpack')

module.exports = {
  chainWebpack: config => {
    config
      .plugin('define')
      .tap(args => { 
        args[0]['process.env'].VUE_APP_TEST = '"test"'
        return args
      })
  }
}