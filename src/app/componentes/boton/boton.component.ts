import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-boton',
  templateUrl: './boton.component.html',
  styleUrls: ['./boton.component.scss']
})
export class BotonComponent implements OnInit {

  //declarar variables nombre : tipo
  numero: number;
  going: boolean;

  constructor() {
    console.trace('BotonComponent constructor')
    //se inicializan las variables
  }

  ngOnInit()
  {
    this.numero = 0;
    this.going = true;
    console.trace('BotonComponent ngOnInit')
  }

  clicker(){

    if (this.going == true)
    {
      this.numero++;
      if(this.numero >=10){
        this.going = false;
      }
    }

    else if (this.going == false)
    {
      if(this.numero <= 1){
        this.going= true;
      }
      this.numero = this.numero - 1;
    }
  }
}
