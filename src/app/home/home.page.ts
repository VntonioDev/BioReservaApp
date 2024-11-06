import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {


  Correos:string="";
  password:string="";

  Correo='b';
  contraseña='b';

  constructor(private router:Router) {}

  PerRe(){
    this.router.navigate(['/perfil-recole'])
  }
  admin(){
    this.router.navigate(['/inicio-admin'])
  }

  login(){
    if(this.Correos === this.Correo && this.password === this.contraseña){
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('Correo', this.Correos)
      this.router.navigate(['/perfil-recole']);
      
    }else{
      alert('Datos mal ingresados')
    }
    }

}
