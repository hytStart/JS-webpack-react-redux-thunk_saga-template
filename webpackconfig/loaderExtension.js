const { getOptions } = require('loader-utils')

function testloader(source) {
  const options = getOptions(this)

  const res = source.replace(/\[name\]/g, options.name)
  console.log(111111, res)

  return res
}

module.exports = testloader
