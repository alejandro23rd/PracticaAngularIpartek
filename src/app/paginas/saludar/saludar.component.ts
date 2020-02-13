import {
  Component,
  OnInit
} from '@angular/core';
import {
  ActivatedRoute
} from '@angular/router';
import {
  FnParam
} from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-saludar',
  templateUrl: './saludar.component.html',
  styleUrls: ['./saludar.component.scss']
})
export class SaludarComponent implements OnInit {

  nombre: String;

  constructor(private route: ActivatedRoute) {

    this.nombre = '';
    this.route.params.subscribe(el => this.nombre = el.pNombre);


  } //constructor

  ngOnInit() {

  } //ngOnInit

}
