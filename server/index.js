const Hapi = require('hapi')
const server = new Hapi.Server({ port: 3000, host: 'localhost' })

const mongoose = require('mongoose')
const uri = process.env.MONGO_URI || 'mongodb://localhost/auth'

require('./database')
mongoose.Promise = global.Promise
mongoose.connect(uri, { useMongoClient: true })

server.register(require('./structure/server.plugins'), function (err) {
    if (err) {
        console.error('ERROR: ' + err)
    } else {
        require('./structure/server.auth')(server)
        require('./structure/server.routes')(server)
    }
})

module.exports = server