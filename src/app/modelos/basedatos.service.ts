import { Injectable } from '@angular/core';
import { Jugador } from './jugador';
import { Juego } from './juego';

@Injectable({
  providedIn: 'root'
})
export class BasedatosService {
   // _juegos: Juego[] = [];
  usuarios: Jugador[] = [
    {
        nombre:"Juan Perez",
        juegos: new Array<Juego>(),
        usuario:"jjperez",
        contras:"123456" 
       },
       {
           nombre:"Ignacio Monllor",
           juegos: new Array<Juego>(),
           usuario:"imonllor",
           contras:"123456" 
       },
       {
           nombre:"Ana Lopez",
           juegos: new Array<Juego>(),
           usuario:"alopez",
           contras:"123456" 
       },
    ];

  constructor() { }


  agregarJugador(jugador:Jugador){
    this.usuarios.push(jugador);
  }
}
