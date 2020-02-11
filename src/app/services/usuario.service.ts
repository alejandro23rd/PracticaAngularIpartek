import { Injectable } from '@angular/core';
import { IUsuarioService } from './IUsuario.service';
import { Usuario } from '../model/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService implements IUsuarioService{
  
  isLogged: boolean;
  usuario: Usuario;

  constructor() {
      this.isLogged = false;
      this.usuario = undefined;
  }//constructor

  estaLogeado(): boolean {
    return this.isLogged;

  }//estaLogeado
  
  login(nombre: string, password: string): Usuario {

    const NOMBRE = 'admin';
    const PASS = 'admin';
    let usuarioBuscar = undefined;

    if(nombre===NOMBRE && password===PASS){

      console.trace('usuario encontrado');
      usuarioBuscar = new Usuario();
      usuarioBuscar.nombre = nombre;
      usuarioBuscar.password = password;
      usuarioBuscar.id = 99;

      //marcar que esta logeado
      this.isLogged = true;
    } else{
      console.trace('error en el registro de usuario');
      this.isLogged = true;
    }
    return this.usuario;

  }//login

  cerrarsesion(idUsuario: number) {
    this.isLogged = false;

  }//cerrarsesion

}
