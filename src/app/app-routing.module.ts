import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'perfil-recole',
    loadChildren: () => import('./perfil-recole/perfil-recole.module').then( m => m.PerfilRecolePageModule)
  },
  {
    path: 'perfil-admin',
    loadChildren: () => import('./perfil-admin/perfil-admin.module').then( m => m.PerfilAdminPageModule)
  },
  {
    path: 'registrarusuario',
    loadChildren: () => import('./registrarusuario/registrarusuario.module').then( m => m.RegistrarusuarioPageModule)
  },
  {
    path: 'horario',
    loadChildren: () => import('./horario/horario.module').then( m => m.HorarioPageModule)
  },
  {
    path: 'inicio-admin',
    loadChildren: () => import('./inicio-admin/inicio-admin.module').then( m => m.InicioAdminPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
