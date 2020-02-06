import { Component } from '@angular/core';
import { GLOBAL } from './global';


// componenete principal que se carga al arrancar la app


/*
selector:   nombre de la etiqueta para inyectar el componente en HTML
templateURL:  Vista del HTML
styleUrls:  Estilo para la vista formato SCSS
*/
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // variables
  globales : any

  constructor() {
    this.globales = GLOBAL;
  } // constructor




}
