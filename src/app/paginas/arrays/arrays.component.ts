import {
  Component,
  OnInit
} from '@angular/core';
import {
  analyzeAndValidateNgModules,
  removeSummaryDuplicates
} from '@angular/compiler';
import {
  element
} from 'protractor';

@Component({
  selector: 'app-arrays',
  templateUrl: './arrays.component.html',
  styleUrls: ['./arrays.component.scss']
})
export class ArraysComponent implements OnInit {

  frutas: any;
  total: number;
  totaldescuento: number;
  aSoloNombres: [];
  frutasConDescuento: [];
  frutasSoloAmarillas: [];
  primeraFrutaVerde: [];
  totalSoloAmarillas = [];
  colores = [];

  constructor() {

    console.trace('ArraysComponent constructor');
    this.total = 0;
    this.totaldescuento = 0;
    this.aSoloNombres = [];
    this.frutasConDescuento = [];
    this.frutasSoloAmarillas = [];
    this.totalSoloAmarillas = [];
    this.primeraFrutaVerde = [];
    this.colores = [];


    this.frutas = [{
        'nombre': 'fresa',
        'precio': 2.45,
        'descuento': 0,
        'colores': ['roja']
      },
      {
        'nombre': 'pera',
        'precio': 2.99,
        'descuento': 25,
        'colores': ['amarilla', 'verde']
      },
      {
        'nombre': 'manzana',
        'precio': 3.15,
        'descuento': 50,
        'colores': ['roja', 'verde', 'amarilla']
      }
    ];
  }

  ngOnInit() {


    //correcta
    this.total = this.frutas.map(el => el.precio).reduce((c, p) => c + p);

    //correcta
    this.totaldescuento = this.frutas.reduce((p, c) => (p + (c.precio - ((c.precio * c.descuento) / 100))), 0);

    //correcta
    this.aSoloNombres = this.frutas.map(el =>
      el.nombre);

    //correcta
    this.primeraFrutaVerde = this.frutas.find(el =>
      el.colores.includes('verde'));

    //correcta
    this.totalSoloAmarillas = this.frutas.filter(el =>
      el.colores.includes('amarilla')).reduce((p, c) =>
      p + c.precio, 0);


    //correcta
    this.frutasSoloAmarillas = this.frutas.filter(el =>
      el.colores.includes('amarilla')).map(el =>
      el.nombre);

    //correcta
    this.frutasConDescuento = this.frutas.filter(el =>
      el.descuento > 0).map(el =>
      el.nombre);

    //correcta
    this.colores = this.frutas.reduce((p, c, i, a) => {
      return p.concat(c.colores); }, []).filter((el, index, array) => {
      console.debug(el, index, array);
      return array.indexOf(el) === index;
    });
  }
}
