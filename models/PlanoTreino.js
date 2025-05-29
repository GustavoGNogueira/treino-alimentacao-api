const mongoose = require('mongoose');

const planoTreinoSchema = new mongoose.Schema({
  usuarioId: { type: mongoose.Schema.Types.ObjectId, ref: 'Usuario' },
  nome: String,
  exercicios: [String],
  data: Date
});

module.exports = mongoose.model('PlanoTreino', planoTreinoSchema);
