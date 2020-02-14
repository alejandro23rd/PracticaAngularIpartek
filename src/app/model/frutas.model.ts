import { Color } from './colores.model';


export class Fruta{
    id: number;
    nombre: string;
    precio: number;
    colores: Array<Color>;
    imagen: string;

    constructor(nombre?: string){
        this.id = 0;
        this.nombre = (nombre) ? nombre : 'Sin nombre';
        this.precio = 0;
        this.colores = new Array<Color>();
        this.imagen = '../assets/frutas/frutadesconocida.jpg';
    }
}