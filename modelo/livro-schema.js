const mongoose = require('./conexao'); // Referencia a conexão
const { Schema } = mongoose;

// Definição do Schema do Livro
const LivroSchema = new Schema({
  _id: { type: mongoose.Schema.Types.ObjectId, required: true },
  titulo: { type: String, required: true },
  codEditora: { type: Number, required: true },
  resumo: { type: String, required: true },
  autores: { type: [String], required: true },
});

const Livro = mongoose.model('Livro', LivroSchema, 'livros'); 

// Exporta o modelo
module.exports = Livro;
