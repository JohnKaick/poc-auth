const cadastrar = require('./cadastrar')
const autenticar = require('./autenticar')

module.exports = [
    {
        path: '/conta/cadastrar',
        method: 'PUT',
        config: {
            auth: false,
            handler: cadastrar
        }
    },
    {
        path: '/conta/autenticar',
        method: 'POST',
        config: {
            auth: false,
            handler: autenticar
        }
    },
]