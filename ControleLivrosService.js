import Livro from '../modelo/Livros';

class Livro {
    constructor(codigo, codEditora, titulo, resumo, autores) {
      this.codigo = codigo;
      this.codEditora = codEditora;
      this.titulo = titulo;
      this.resumo = resumo;
      this.autores = autores;
    }
  }
  
  // Array de livros inicial
  const livros = [
    new Livro(1, 1, "Use a cabeça: Java", 
      "Use a cabeça! Java é uma experiência completa de aprendizado em programação orientada a objetos(OO) e Java", 
      ["Bert Bates", "Kathy Sierra"]),
    new Livro(2, 2, "Java: como programar", 
      "Milhões de alunos e profissionais aprenderam programação e desenvolvimento de software com os livros Deitel", 
      ["Paul Deitel", "Harvey Deitel"]),
    new Livro(3, 3, "Core Java for the impatient", 
      "Reader familiar with Horstmann´s original, two-volume Core-Java books who are looking for comprehensive, but condensed guide to all the new features and functions of Java SE 9 will learn how these new features impact the language and core libraries.", 
      ["Cay Horstmann"])
  ];
  
  // Classe ControleLivro
  class ControleLivro {
  
    // Método para obter todos os livros
    obterLivros() {
      return livros;
    }
  
    // Método para incluir um novo livro
    incluir(novoLivro) {
      const novoCodigo = livros.length > 0 ? Math.max(...livros.map(livro => livro.codigo)) + 1 : 1;
      novoLivro.codigo = novoCodigo;
      livros.push(novoLivro);
    }
  
    // Método para excluir um livro com base no código
    excluir(codigo) {
      const indice = livros.findIndex(livro => livro.codigo === codigo);
      if (indice >= 0) {
        livros.splice(indice, 1);
      }
    }
  }
  
  module.exports = ControleLivro;