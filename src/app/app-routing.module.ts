import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { DisciplinasComponent } from './disciplinas/disciplinas.component';
import { CursoComponent } from './curso/curso.component';

const routes: Routes = [
  {
    path: '',
    component: IndexComponent,
  },
  {
    path: 'disciplinas',
    component: DisciplinasComponent,
  },
  {
    path: 'disciplina/:curso',
    component: CursoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
