
module.exports = function (server) {

    server.route(require('./../routes/conta'))
    server.route(require('./../routes/relatorio'))
    server.route(require('./../routes/permissao'))

}