import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Livro } from 'src/app/models/Livro';
import { LivroServiceService } from 'src/app/service/LivroService.service';

@Component({
  selector: 'app-livro-detalhes',
  templateUrl: './livro-detalhes.component.html',
  styleUrls: ['./livro-detalhes.component.css']
})
export class LivroDetalhesComponent implements OnInit {
  livroRetorno: Livro | undefined;
  livroId: string = '';

  constructor(
    public livroService: LivroServiceService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.livroId = params['id'];
      this.carregaLivro();

    });
  }

  public carregaLivro() {
    this.livroRetorno = this.livroService.livroById(this.livroId);
  }

}
