import { Component, OnInit } from '@angular/core';
import {USUARIOS} from '../modelos/usuarios';

@Component({
  selector: 'app-listadojugadores',
  templateUrl: './listadojugadores.component.html',
  styleUrls: ['./listadojugadores.component.css']
})
export class ListadojugadoresComponent implements OnInit {

  jugadores = USUARIOS;
  constructor() { }

  ngOnInit() {
    console.log(USUARIOS);
  }

}
