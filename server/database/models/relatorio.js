const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const relatorioSchema = new Schema({
    conta: { type: Schema.Types.ObjectId, ref: 'Conta' },
    nome: { type: String, default: '' },
});

module.exports = mongoose.model('Relatorio', relatorioSchema);