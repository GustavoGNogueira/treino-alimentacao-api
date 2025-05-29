const mongoose = require('mongoose');

const refeicaoSchema = new mongoose.Schema({
  horario: { type: String, required: true },
  descricao: { type: String, required: true }
});

const planoAlimentarSchema = new mongoose.Schema({
  usuarioId: { type: mongoose.Schema.Types.ObjectId, ref: 'Usuario', required: true },
  data: { type: Date, required: true },
  refeicoes: [refeicaoSchema]
});

module.exports = mongoose.model('PlanoAlimentar', planoAlimentarSchema);
