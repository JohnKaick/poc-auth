const mongoose = require('mongoose')
const Conta = mongoose.model('Conta')
const passwordHash = require('password-hash')
const jwt = require('jsonwebtoken')

async function gerarToken(conta) {

    let tokenData = {
        contaId: conta.id,
    }

    let token = jwt.sign(tokenData, 'NeverShareYourSecret')

    return token
}

module.exports = async function (request, reply) {

    let conta = await Conta.findOne({ email: request.payload.login })
    if (!conta) reply.notFound()

    let senha = passwordHash.verify(request.payload.senha, conta.password)
    if (!senha) reply.notFound()

    let auth = await gerarToken(conta)

    reply(auth)

}