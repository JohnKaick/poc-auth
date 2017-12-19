const mongoose = require('mongoose')
const Relatorio = mongoose.model('Relatorio')

module.exports = async function (request, reply) {

    let relatorio = await Relatorio.create({
        conta: request.auth.credentials.contaId,
        nome: request.payload.nome,
    })

    reply(relatorio)

}