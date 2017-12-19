const obterTodos = require('./obter-todos')
const cadastrar = require('./cadastrar')

module.exports = [
    {
        path: '/relatorio/obter-todos',
        method: 'GET',
        config: {
            handler: obterTodos
        }
    },
    {
        path: '/relatorio/cadastrar',
        method: 'PUT',
        config: {
            handler: cadastrar
        }
    },
]