import { Component, OnInit } from '@angular/core';
import { Jugador } from '../modelos/jugador';
import { BasedatosService } from '../modelos/basedatos.service';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent implements OnInit {

  jugador: Jugador;
  constructor(private _bdService: BasedatosService) { 
    this.jugador=new Jugador("","","");
  }

  ngOnInit() {
   // this._bdService.usuarios;
    for ( let usuario of this._bdService.usuarios ) {
    console.log(usuario);
    }
  }

  agregar(){

console.log(this.jugador);
    this._bdService.agregarJugador(this.jugador);
    alert("Se ha registrado correctamente");
/*     nombre: string;
    juegos?:Array<Juego>;
    usuario:string;
    contras:string; */
  }

}
