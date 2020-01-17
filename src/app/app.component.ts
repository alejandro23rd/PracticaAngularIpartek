import { Component } from '@angular/core';

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
}
