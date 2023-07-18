import { Component } from '@angular/core';
import { LivroServiceService } from 'src/app/service/LivroService.service';

@Component({
  selector: 'app-livros-reservados',
  templateUrl: './livros-reservados.component.html',
  styleUrls: ['./livros-reservados.component.css']
})
export class LivrosReservadosComponent {

  livros: any[] = [];

  constructor(public livroServiceService:LivroServiceService){}

  ngOnInit(  ){
    this.carregaLivros();
  }

  public carregaLivros() {
    this.livros = this.livroServiceService.GetAllLivros()
                      .filter(livro => livro.volumeInfo.reservado == true);

    console.log(this.livros);

  }



}
