const mongoose = require('mongoose');

const options = {
  useUnifiedTopology: true,
  useNewUrlParser: true
};

// Conectar ao MongoDB
mongoose.connect('mongodb://localhost:27017/livro-servidor', options)
  .then(() => {
    console.log('Conectado ao MongoDB');
  })
  .catch((err) => {
    console.error('Erro de conexão:', err);
  });

// Exporta o mongoose para uso em outros arquivos
module.exports = mongoose;
