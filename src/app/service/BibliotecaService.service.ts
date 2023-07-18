import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BibliotecaService {
  private livros: string[] = [];

  constructor() { }

  adicionarLivro(livro: string) {
    this.livros.push(livro);
  }

  obterLivros(): string[] {
    return this.livros;
  }
}
