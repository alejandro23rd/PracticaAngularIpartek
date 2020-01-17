import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-boton',
  templateUrl: './boton.component.html',
  styleUrls: ['./boton.component.scss']
})
export class BotonComponent implements OnInit {

  //declarar variables nombre : tipo
  numero: number;

  constructor() {
    console.trace('BotonComponent constructor')
    //se inicializan las variables
  }

  ngOnInit()
  {
    console.trace('BotonComponent ngOnInit')
  }

}
