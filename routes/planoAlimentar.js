const express = require('express');
const router = express.Router();
const PlanoAlimentar = require('../models/PlanoAlimentar');

// Criar plano alimentar
router.post('/', async (req, res) => {
  try {
    const novoPlano = new PlanoAlimentar(req.body);
    await novoPlano.save();
    res.status(201).json(novoPlano);
  } catch (error) {
    res.status(400).json({ erro: error.message });
  }
});

// Buscar todos os planos alimentares
router.get('/', async (req, res) => {
  try {
    const planos = await PlanoAlimentar.find().populate('usuarioId');
    res.json(planos);
  } catch (error) {
    res.status(500).json({ erro: error.message });
  }
});

// Buscar plano alimentar por ID
router.get('/:id', async (req, res) => {
  try {
    const plano = await PlanoAlimentar.findById(req.params.id).populate('usuarioId');
    if (!plano) return res.status(404).json({ erro: 'Plano alimentar não encontrado' });
    res.json(plano);
  } catch (error) {
    res.status(500).json({ erro: error.message });
  }
});

// Atualizar plano alimentar
router.put('/:id', async (req, res) => {
  try {
    const planoAtualizado = await PlanoAlimentar.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!planoAtualizado) return res.status(404).json({ erro: 'Plano alimentar não encontrado' });
    res.json(planoAtualizado);
  } catch (error) {
    res.status(400).json({ erro: error.message });
  }
});

// Deletar plano alimentar
router.delete('/:id', async (req, res) => {
  try {
    const planoDeletado = await PlanoAlimentar.findByIdAndDelete(req.params.id);
    if (!planoDeletado) return res.status(404).json({ erro: 'Plano alimentar não encontrado' });
    res.json({ mensagem: 'Plano alimentar deletado com sucesso' });
  } catch (error) {
    res.status(500).json({ erro: error.message });
  }
});

module.exports = router;
