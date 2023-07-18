import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LivroComponent } from './components/pages/livro/livro.component';
import { ContatoComponent } from './components/pages/contato/contato.component';
import { LivroDetalhesComponent } from './components/pages/livro-detalhes/livro-detalhes.component';
import { PrincipalComponent } from './components/pages/principal/principal.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: PrincipalComponent },
  { path: 'principal', component: PrincipalComponent },
  { path: 'livro', component: LivroComponent },
  { path: 'livro/:id', component: LivroDetalhesComponent },
  { path: 'contato', component: ContatoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
