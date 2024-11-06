import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PerfilRecolePage } from './perfil-recole.page';

const routes: Routes = [
  {
    path: '',
    component: PerfilRecolePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PerfilRecolePageRoutingModule {}
