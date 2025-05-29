const express = require('express');
const router = express.Router();
const PlanoTreino = require('../models/PlanoTreino');

// POST – Criar novo plano
router.post('/', async (req, res) => {
  try {
    const plano = await PlanoTreino.create(req.body);
    res.status(201).json(plano);
  } catch (err) {
    res.status(400).json({ erro: err.message });
  }
});

// GET – Listar todos os planos
router.get('/', async (req, res) => {
  try {
    const planos = await PlanoTreino.find().populate('usuarioId');
    res.json(planos);
  } catch (err) {
    res.status(500).json({ erro: err.message });
  }
});

// GET – Obter um plano por ID
router.get('/:id', async (req, res) => {
  try {
    const plano = await PlanoTreino.findById(req.params.id).populate('usuarioId');
    if (!plano) return res.status(404).json({ erro: 'Plano não encontrado' });
    res.json(plano);
  } catch (err) {
    res.status(500).json({ erro: err.message });
  }
});

// PUT – Atualizar um plano
router.put('/:id', async (req, res) => {
  try {
    const plano = await PlanoTreino.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(plano);
  } catch (err) {
    res.status(400).json({ erro: err.message });
  }
});

// DELETE – Remover um plano
router.delete('/:id', async (req, res) => {
  try {
    await PlanoTreino.findByIdAndDelete(req.params.id);
    res.json({ mensagem: 'Plano excluído com sucesso' });
  } catch (err) {
    res.status(500).json({ erro: err.message });
  }
});

module.exports = router;
