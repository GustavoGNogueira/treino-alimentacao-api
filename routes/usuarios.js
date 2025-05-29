const express = require('express');
const router = express.Router();
const Usuario = require('../models/Usuario');

// CREATE - Cadastrar novo usuário
router.post('/', async (req, res) => {
  try {
    const novoUsuario = new Usuario(req.body);
    const usuarioSalvo = await novoUsuario.save();
    res.status(201).json(usuarioSalvo);
  } catch (err) {
    res.status(400).json({ erro: err.message });
  }
});

// READ - Listar todos os usuários
router.get('/', async (req, res) => {
  try {
    const usuarios = await Usuario.find();
    res.json(usuarios);
  } catch (err) {
    res.status(500).json({ erro: err.message });
  }
});

// READ - Buscar usuário por ID
router.get('/:id', async (req, res) => {
  try {
    const usuario = await Usuario.findById(req.params.id);
    if (!usuario) return res.status(404).json({ erro: 'Usuário não encontrado' });
    res.json(usuario);
  } catch (err) {
    res.status(500).json({ erro: err.message });
  }
});

// UPDATE - Atualizar usuário
router.put('/:id', async (req, res) => {
  try {
    const usuarioAtualizado = await Usuario.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(usuarioAtualizado);
  } catch (err) {
    res.status(400).json({ erro: err.message });
  }
});

// DELETE - Excluir usuário
router.delete('/:id', async (req, res) => {
  try {
    await Usuario.findByIdAndDelete(req.params.id);
    res.json({ mensagem: 'Usuário excluído com sucesso' });
  } catch (err) {
    res.status(500).json({ erro: err.message });
  }
});

module.exports = router;

