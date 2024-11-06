import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil-admin',
  templateUrl: './perfil-admin.page.html',
  styleUrls: ['./perfil-admin.page.scss'],
})
export class PerfilAdminPage implements OnInit {

  constructor(private router:Router) { }


  public alertButtons = [
    {
      text: 'Cancelar',
      role: 'cancelar',
      handler: () => {
        console.log('Alert canceled');
      },
    },
    {
      text: 'si',
      role: 'confirm',
      handler: () => {
        console.log('Alert confirmed');
        this.router.navigate(['/inicio-admin']);
      },
    },
  ];

  setResult(ev: CustomEvent) {
    console.log(`Dismissed with role: ${ev.detail.role}`);
  }

  ngOnInit() {
  }

}
