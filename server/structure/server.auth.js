
var validate = function (decoded, request, callback) {
    if (decoded && decoded.usuarioId) return callback(null, true);
    else return callback(null, false)
};


module.exports = function (server) {

    server.auth.strategy('jwt', 'jwt', {
        key: 'NeverShareYourSecret',
        validateFunc: validate,
        verifyOptions: { algorithms: ['HS256'] }
    })

    server.auth.default('jwt')

}