import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecetasComponent } from './paginas/recetas/recetas.component';
import { JuegoComponent } from './paginas/juego/juego.component';
import { InicioComponent } from './paginas/inicio/inicio.component';
import { ArraysComponent } from './paginas/arrays/arrays.component';
import { PokemonRestComponent } from './paginas/pokemon-rest/pokemon-rest.component';
import { EstilosComponent } from './paginas/estilos/estilos.component';
import { DirectivasComponent } from './paginas/directivas/directivas.component';
import { FiltrosComponent } from './paginas/filtros/filtros.component';
import { Error404Component } from './paginas/error404/error404.component';
import { SaludarComponent } from './paginas/saludar/saludar.component';

/**
 * Definir las rutas la app de angular
 * El path debe coincidir con [routerLink] del componente navbar
 */
const routes: Routes = [

  //pagina inicio
  { path: '',  component: InicioComponent},

  //resto de paginas
  { path: 'recetas', component: RecetasComponent },
  { path: 'juego', component: JuegoComponent },
  { path: 'pokemon', component: PokemonRestComponent },
  { path: 'arrays', component: ArraysComponent},
  { path: 'estilos', component: EstilosComponent},
  { path: 'directivas', component: DirectivasComponent},
  { path: 'filtros', component: FiltrosComponent},

  //los puntos sirven para indicar que es un parametro
  { path: 'saludar/:pNombre', component: SaludarComponent},

  //si no encunetra la url, saca la pagina de error 404
  { path: '**', component: Error404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
