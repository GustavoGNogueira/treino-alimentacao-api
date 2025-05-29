const express = require('express');
const mongoose = require('mongoose');
const app = express();

app.use(express.json());

// Conexão com MongoDB Atlas
const uri = 'mongodb+srv://ggomesnog:BDNRtreino@cluster0.5wnqikx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'; 
mongoose.connect(uri)
  .then(() => console.log('Conectado ao MongoDB Atlas!'))
  .catch(err => console.error('Erro ao conectar ao MongoDB:', err));

// Modelo Usuário
const usuarioSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  idade: Number
});

const Usuario = mongoose.model('Usuario', usuarioSchema);

// Rotas CRUD

// Create (POST)
app.post('/users', async (req, res) => {
  try {
    const novoUsuario = new Usuario(req.body);
    await novoUsuario.save();
    res.status(201).json(novoUsuario);
  } catch (error) {
    res.status(400).json({ erro: error.message });
  }
});

// Read All (GET)
app.get('/users', async (req, res) => {
  try {
    const usuarios = await Usuario.find();
    res.json(usuarios);
  } catch (error) {
    res.status(500).json({ erro: error.message });
  }
});

// Read One (GET)
app.get('/users/:id', async (req, res) => {
  try {
    const usuario = await Usuario.findById(req.params.id);
    if (!usuario) return res.status(404).json({ erro: 'Usuário não encontrado' });
    res.json(usuario);
  } catch (error) {
    res.status(500).json({ erro: error.message });
  }
});

// Update (PUT)
app.put('/users/:id', async (req, res) => {
  try {
    const usuarioAtualizado = await Usuario.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!usuarioAtualizado) return res.status(404).json({ erro: 'Usuário não encontrado' });
    res.json(usuarioAtualizado);
  } catch (error) {
    res.status(400).json({ erro: error.message });
  }
});

// Delete (DELETE)
app.delete('/users/:id', async (req, res) => {
  try {
    const usuarioDeletado = await Usuario.findByIdAndDelete(req.params.id);
    if (!usuarioDeletado) return res.status(404).json({ erro: 'Usuário não encontrado' });
    res.json({ mensagem: 'Usuário deletado com sucesso' });
  } catch (error) {
    res.status(500).json({ erro: error.message });
  }
});

const planoTreinoRoutes = require('./routes/planoTreino');
app.use('/planos-treino', planoTreinoRoutes);

const planoAlimentarRoutes = require('./routes/planoAlimentar');
app.use('/planos-alimentares', planoAlimentarRoutes);


// Iniciar servidor
const port = 3000;
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
