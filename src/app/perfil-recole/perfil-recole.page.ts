import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil-recole',
  templateUrl: './perfil-recole.page.html',
  styleUrls: ['./perfil-recole.page.scss'],
})
export class PerfilRecolePage implements OnInit {

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
        this.router.navigate(['/home']);
      },
    },
  ];

  setResult(ev: CustomEvent) {
    console.log(`Dismissed with role: ${ev.detail.role}`);
  }

  ngOnInit() {
  }

}
