const mongoose = require('mongoose');

const UsuarioSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  idade: Number,
  objetivo: String
});

module.exports = mongoose.model('Usuario', UsuarioSchema);

