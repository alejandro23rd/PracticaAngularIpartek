import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {

  titulo: string;
  numeroClicks: number;
  going: boolean;
  visible: boolean;

  constructor() {
    this.titulo= 'WELCOME TO ANGULAR';
    this.numeroClicks= 0;
    this.going = false;
    this.visible = false;
    
  }

  ngOnInit() {

  } //ngOnInit()

  contarClicks(){
    console.trace('numeroClicks');
    if(this.going == false){
      this.numeroClicks++;
      if(this.numeroClicks > 10 ){
        this.going = true;
      }
    }

    if(this.going == true){
      this.numeroClicks--;
      if(this.numeroClicks < 1 ){
        this.going = false;
      }
    }
  } //contarClicks()

  decirAdios(){
    console.trace('visible');
    this.visible = true;
  }//decirAdios()


} // InicioComponent
