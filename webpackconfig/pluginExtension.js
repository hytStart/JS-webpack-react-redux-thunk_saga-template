class HelloWorldPlugin {
  constructor(options) {
    this.options = options
  }

  apply(compiler) {
    compiler.plugin('emit', (compilation, next) => {
      console.log('#### Hello World!', this.options.name)

      next() // 不要忘记调用 next，否则 webpack 将不会继续打包。
    })
  }
}

module.exports = { HelloWorldPlugin }
