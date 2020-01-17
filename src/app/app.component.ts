import { Component } from '@angular/core';
import { NgIf } from '@angular/common';

/**componente principal que se encarga de arrancar la app
 * 
 * Selector: nombre de la etiqueta para inyectar el componente en html.
 * templateUrl: es la vista donde se ejecuta el codigo html.
 * styleUrls: es la vista que se usa para dar formato a nuestra pagina html.
 * 
*/

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'angularApp';
  productos = [{
		"id": 1,
    "nombre": "Cafe",
    "imagen": "https://www.medicinaortomolecular.com.mx/wp-content/uploads/2014/07/Cafe-500x325.jpg",
		"glutten": false,
		"precio": 1.40,
		"categoria": {
			"id": 1,
			"nombre": "desayunos"
		},
		"historico": [{
				"fecha": "01/01/2020",
				"precio": 1.45
			},
			{
				"fecha": "01/01/2019",
				"precio": 1.40
			},
			{
				"fecha": "01/01/2018",
				"precio": 1.35
			}
		]
	},
	{
		"id": 2,
    "nombre": "Leche",
    "imagen": "https://mejorconsalud.com/wp-content/uploads/2017/03/sufrimos-osteoporosis-bebemos-leche.jpg",
		"glutten": false,
		"precio": 2.40,
		"categoria": {
			"id": 2,
			"nombre": "bebidas"
		},
		"historico": [{
				"fecha": "02/01/2020",
				"precio": 2.45
			},
			{
				"fecha": "01/01/2019",
				"precio": 3.40
			},
			{
				"fecha": "01/01/2018",
				"precio": 4.35
			}
		]
	}, {
		"id": 3,
    "nombre": "Galletas con gluten",
    "imagen": "https://mejorconsalud.com/wp-content/uploads/2015/09/galletas-de-chocolate-blanco-500x325.jpg",
		"glutten": true,
		"precio": 5.40,
		"categoria": {
			"id": 1,
			"nombre": "desayunos"
		},
		"historico": [{
				"fecha": "03/01/2020",
				"precio": 3.10
			},
			{
				"fecha": "01/01/2019",
				"precio": 4.10
			},
			{
				"fecha": "01/01/2018",
				"precio": 5.10
			}
		]
	}
];
  pSeleccionado = this.productos[0];
  seleccionarProducto = function(producto){
    console.log('le hemos clickeado');
    this.pSeleccionado = producto;
  };
  
}
