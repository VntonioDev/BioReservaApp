import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio-admin',
  templateUrl: './inicio-admin.page.html',
  styleUrls: ['./inicio-admin.page.scss'],
})
export class InicioAdminPage  {

  constructor(private router:Router) {}

  PerAdmin(){
    this.router.navigate(['/perfil-admin'])

  }


}
