const should = require('should')

describe('cadastro', function () {

    it('novo usuário João', async () => {
        let response = await server.inject({
            method: 'PUT',
            url: '/conta/cadastrar',
            payload: {
                exibicao: 'João',
                login: 'joao@gmail.com',
                senha: '123456'
            },
        })
        should(response.statusCode).eql(200)
        should(response.result.success).true()
    })

    it('autenticando João', async () => {
        let response = await server.inject({
            method: 'POST',
            url: '/conta/autenticar',
            payload: {
                login: 'joao@gmail.com',
                senha: '123456'
            }
        })
        should(response.statusCode).eql(200)
        should(response.result).be.an.Object()
        should(response.result.token).be.a.String()
        this.defaultHeaders = {
            Authorization: response.result.token
        }
    })

    it('novo relatório', async () => {
        let response = await server.inject({
            method: 'PUT',
            url: '/relatorio/cadastrar',
            headers: this.defaultHeaders,
            payload: {
                nome: 'Relatório 01',
            },
        })
        should(response.statusCode).eql(200)
        should(response.result.nome).be.a.String()
        should(response.result.nome).equal('Relatório 01')
    })
})