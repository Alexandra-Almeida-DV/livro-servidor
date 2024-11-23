import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',  
  })

  export class ControleEditoraService {
    editoras = [
      { codEditora: 1, nome: "Alfa Books" },
      { codEditora: 2, nome: "Pearson" },
      { codEditora: 3, nome: "Addison Wesley" }
    ];
  
    getEditoras() {
      return this.editoras;
    }
  
    getNomeEditora(codEditora) {
      const editora = this.editoras.filter((e) => e.codEditora === codEditora)[0];
      return editora ? editora.nome : "Editora não encontrada";
    }
  }
  
  module.exports = ControleEditoraService;
  