const express = require('express'); 
const router = express.Router();
const { obterLivros, incluir, excluir } = require('../modelo/livro-dao');


router.get('/', async (req, res) => {
  try {
    const livros = await obterLivros(); 
    res.status(200).json(livros); 
  } catch (err) {
    res.status(500).json({ error: `Erro ao obter livros: ${err.message}` });
  }
});

router.post('/', async (req, res) => {
  try {
    const novoLivro = await incluir(req.body); 
    res.status(201).json(novoLivro); 
  } catch (err) {
    res.status(500).json({ error: `Erro ao incluir livro: ${err.message}` });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params; 
    const resultado = await excluir(id);
    if (resultado.deletedCount > 0) {
      res.status(200).json({ message: 'Livro excluído com sucesso!' }); 
    } else {
      res.status(404).json({ error: 'Livro não encontrado!' });
    }
  } catch (err) {
    res.status(500).json({ error: `Erro ao excluir livro: ${err.message}` }); 
  }
});

module.exports = router;
