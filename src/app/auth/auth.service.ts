import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { USUARIOS } from '../modelos/usuarios';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  usuarios= USUARIOS;
  constructor() { }
  isLoggedIn = false;

  // store the URL so we can redirect after logging in
  redirectUrl: string;

  login(usuario:string, clave:string):boolean{
 
      //delay(1000),
     // tap(val => this.isLoggedIn = true)
     for(let i =0; i<this.usuarios.length; i++) {
       if(usuario === this.usuarios[i].usuario &&
          clave === this.usuarios[i].contras ) {
              //this.router.navigate(['/home']);
              //this.usuarios[i].
              //localStorage.setItem('jugador', JSON.stringify(this.usuarios[i]));
              //console.log("entre");
              this.isLoggedIn = true;
              return true;
          }  
      }
      this.isLoggedIn = false;
      return false;
   }

   logout(): void {
    this.isLoggedIn = false;
  }
  /*
   estaAutorizado() :boolean{

   }*/
   
  }
