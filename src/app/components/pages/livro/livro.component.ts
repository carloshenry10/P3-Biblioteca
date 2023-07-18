import { Component } from '@angular/core';
import { GoogleBooksService } from '../../../service/GoogleBooksService.service';
import { LivroServiceService } from 'src/app/service/LivroService.service';

@Component({
  selector: 'app-livros',
  templateUrl: './livro.component.html',
  styleUrls: ['./livro.component.css']
})
export class LivroComponent {
  termoBusca: string | null = null;
  livros: any[] = [];

  constructor(private livroService: LivroServiceService) {}

  atualizarTermoBusca(event: any) {
    this.termoBusca = event.target.value;
  }

  buscarLivros() {
    if (this.termoBusca) {
      this.livroService.searchBooks(this.termoBusca)
        .then(livros => {
          this.livros = livros;
        })
        .catch(error => {
          console.error('Erro ao buscar livros:', error);
        });
    }
  }

}
