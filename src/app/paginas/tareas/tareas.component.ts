import {
  Component,
  OnInit
} from '@angular/core';
import {
  Tarea
} from 'src/app/model/tarea';
import {
  TareasService
} from 'src/app/services/tareas.service';
import { stringify } from 'querystring';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.scss']
})
export class TareasComponent implements OnInit {

  tareas: Array < Tarea > ;
  tituloNuevo: string;

  constructor(private servicioTarea: TareasService) {
    console.trace('TareasComponent constructor');
    this.tareas = []; // incializar el array
    this.tituloNuevo = '';

  } // constructor

  ngOnInit() {
    console.trace('TareasComponent ngOnInit');
    this.cargarTareas();

  } // ngOnInit

  editarEstado(tarea: Tarea) {
    console.debug('click %o', tarea);

    //hardcoreamos el cambio en el navegador (NO EN LA BASE DE DATOS COMO SE TENDRIA QUE HACER)
    tarea.completada = !tarea.completada;

    this.servicioTarea.modificar(tarea).subscribe( data => this.cargarTareas);
  } //editarEstado

  private cargarTareas(): void {

    console.trace('cargarTareas');

    // llamar al service para obtener tareas
    this.servicioTarea.listar().subscribe(datos => {
      console.debug('esto se ejecuta de forma asincrona');
      this.tareas = datos;
    })

  } //cargarTareas

  eliminarTarea(tarea: Tarea){
    console.debug('procedemos a eliminar una tarea');

    if(confirm(`¿Desear eliminar la tarea con id: ${tarea.id} y titulo: ${tarea.titulo}`)){
      console.debug('BAJA CONFIRMADA');
      this.servicioTarea.eliminar(tarea.id).subscribe( () => this.cargarTareas());

    } else{
      alert('BAJA CANCELADA');
    }

  }//eliminarTarea

  nuevaTarea(): void {
    console.debug('procedemos a crear una nueva tarea', this.tituloNuevo);

    //crear objeto Tarea

    const tNuevo = new Tarea();
    tNuevo.titulo = this.tituloNuevo;
    
    if(tNuevo.titulo == ""){
      console.debug('El titulo esta vacio');
      alert('El titulo esta vacio');

    }else{
      console.debug('tNuevo');

      this.servicioTarea.crear(tNuevo).subscribe( ()=> {
        this.cargarTareas()
        this.tituloNuevo = '';
      
      });
    }

  }//nuevaTarea

} // TareasComponent
