const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ContaSchema = new Schema({
    nome: { type: String, default: '' },
    email: { type: String, default: '' },
    password: { type: String, default: '' },
});

module.exports = mongoose.model('Conta', ContaSchema);