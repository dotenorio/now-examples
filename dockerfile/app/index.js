var shortid = require('shortid')

module.exports = () => ({
  message: 'Dockerfile example to use with now!',
  shortid: shortid.generate()
})