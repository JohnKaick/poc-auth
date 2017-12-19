const mongoose = require('mongoose')
const Relatorio = mongoose.model('Relatorio')

module.exports = async function (request, reply) {

    let relatorios = await Relatorio.find({ conta: request.auth.credentials.contaId })

    reply(relatorios)

}