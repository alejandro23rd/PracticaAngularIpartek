import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PruebaComponent } from './componentes/prueba/prueba.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { InicioComponent } from './paginas/inicio/inicio.component';
import { JuegoComponent } from './paginas/juego/juego.component';
import { ArraysComponent } from './paginas/arrays/arrays.component';
import { PokemonRestComponent } from './paginas/pokemon-rest/pokemon-rest.component';
import { EstilosComponent } from './paginas/estilos/estilos.component';
import { DirectivasComponent } from './paginas/directivas/directivas.component';
import { FiltrosComponent } from './paginas/filtros/filtros.component';
import { HelloDirective } from './directives/hello.directive';
import { SubrayarDirective } from './directives/subrayar.directive';
import { AnimalesPipe } from './pipes/animales.pipe';
import { FooterComponent } from './componentes/footer/footer.component';
import { RecetasComponent } from './paginas/recetas/recetas.component';
import { RecetaFiltroPipe } from './pipes/receta.pipe';
import { Error404Component } from './paginas/error404/error404.component';
import { SaludarComponent } from './paginas/saludar/saludar.component';
import { TareasComponent } from './paginas/tareas/tareas.component';

@NgModule({
  declarations: [
    AppComponent,
    PruebaComponent,
    NavbarComponent,
    InicioComponent,
    JuegoComponent,
    ArraysComponent,
    PokemonRestComponent,
    EstilosComponent,
    DirectivasComponent,
    FiltrosComponent,
    HelloDirective,
    SubrayarDirective,
    AnimalesPipe,
    FooterComponent,
    RecetasComponent,
    RecetaFiltroPipe,
    Error404Component,
    SaludarComponent,
    TareasComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule, // Modulo para llamadas por HTTP
    FormsModule,      // Modulo para usar Formularios
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
