import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'rutasFiltro'
})
export class RutasPipe implements PipeTransform{

    transform(datos: any): any{

        console.debug(datos);

        if (datos) {

            // filtrar por nombre
            datos = datos.toUpperCase();
      
            const resultado = datos.filter( (el) => {
              console.debug(el);
              const nombre = el.Nombre.toUpperCase();
              return nombre.includes(datos);
            });
        }
    }
}

