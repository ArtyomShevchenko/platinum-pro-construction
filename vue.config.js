const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})

// work scripst after build app
module.exports = {
  publicPath: "",
}
