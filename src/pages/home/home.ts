import { InicioPage } from './../inicio/inicio';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RegisterPage } from '../registrarse/registro';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  Registrarse () {
    this.navCtrl.push(RegisterPage);
  }

  Inicio () {
    this.navCtrl.push(InicioPage);
    
  }
  

}
