import { Component, OnInit } from '@angular/core';
import { BibliotecaService } from '../service/BibliotecaService.service';

@Component({
  selector: 'app-biblioteca',
  templateUrl: './biblioteca.component.html',
  styleUrls: ['./biblioteca.component.css']
})
export class BibliotecaComponent implements OnInit {
  livros: string[] = [];

  novoLivro: string = '';

  constructor(private bibliotecaService: BibliotecaService) { }

  ngOnInit() {
    this.livros = this.bibliotecaService.obterLivros();
  }

  adicionarLivro(livro: string) {
    this.bibliotecaService.adicionarLivro(livro);
    this.livros = this.bibliotecaService.obterLivros();
  }
}
