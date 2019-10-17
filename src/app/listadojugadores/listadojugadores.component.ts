import { Component, OnInit } from '@angular/core';
import {USUARIOS} from '../modelos/usuarios';
import { Jugador } from '../modelos/jugador';

@Component({
  selector: 'app-listadojugadores',
  templateUrl: './listadojugadores.component.html',
  styleUrls: ['./listadojugadores.component.css']
})
export class ListadojugadoresComponent implements OnInit {

  jugadores = USUARIOS;
  jugador:Jugador;
  constructor() {
    this.jugador = JSON.parse(localStorage.getItem('jugador'));
   }

  ngOnInit() {
    //console.log(USUARIOS);
/*     nombre: string;
    juegos?:Array<Juego>;
    usuario:string;
    contras:string; */
  }

}
