import { Component, OnInit } from '@angular/core';
import { RECETAS } from '../../recetas';

@Component({
  selector: 'app-recetas',
  templateUrl: './recetas.component.html',
  styleUrls: ['./recetas.component.scss']
})
export class RecetasComponent implements OnInit {


  recetas: Array<any>;
  recetaSeleccionada: any;
  
  constructor() {
  
  this.recetas = RECETAS;
  
  this.recetaSeleccionada = this.recetas[0];
  }// constructor
  
  seleccionarReceta = function (receta) {
  console.log("seleccionarReceta(" + receta.id + " " + receta.nombre + ")");
  
  this.recetaSeleccionada = receta;
  }// seleccionarReceta
  
  ngOnInit() {
  console.log('RecetasComponent ngOnInit');
  }// ngOnInit




} //RecetasComponent
