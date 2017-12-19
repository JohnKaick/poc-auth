const mongoose = require('mongoose')
const Conta = mongoose.model('Conta')
const passwordHash = require('password-hash')

module.exports = async function (request, reply) {

    let senha = passwordHash.generate(request.payload.senha)

    let conta = await Conta.create({
        nome: request.payload.nome,
        email: request.payload.login,
        password: senha
    })

    reply(conta)    

}