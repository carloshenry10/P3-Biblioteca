import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BibliotecaComponent } from './biblioteca/biblioteca.component';
import { LivroComponent } from './components/pages/livro/livro.component';
import { FormsModule } from '@angular/forms';
import { NavComponent } from './shared/nav/nav.component';
import { LivrosDisponiveisComponent } from './components/livros-disponiveis/livros-disponiveis.component';
import { HomeComponent } from './components/pages/home/home.component';
import { ContatoComponent } from './components/pages/contato/contato.component';
import { LivroDetalhesComponent } from './components/pages/livro-detalhes/livro-detalhes.component';

@NgModule({
  declarations: [
    AppComponent,
    BibliotecaComponent,
    LivroComponent,
    NavComponent,
    LivrosDisponiveisComponent,
    HomeComponent,
    ContatoComponent,
    LivroDetalhesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
