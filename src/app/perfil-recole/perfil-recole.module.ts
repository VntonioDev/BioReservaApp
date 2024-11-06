import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PerfilRecolePageRoutingModule } from './perfil-recole-routing.module';

import { PerfilRecolePage } from './perfil-recole.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PerfilRecolePageRoutingModule
  ],
  declarations: [PerfilRecolePage]
})
export class PerfilRecolePageModule {}
