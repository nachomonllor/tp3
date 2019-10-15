import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import {Subscription} from "rxjs";
//import {TimerObservable} from "rxjs/observable/TimerObservable";
import { timer, Observable } from 'rxjs';
import { USUARIOS } from '../modelos/usuarios';
import { AuthService } from '../auth/auth.service';
@Component({
  selector: 'app-login3',
  templateUrl: './login3.component.html',
  styleUrls: ['./login3.component.css']
})
export class Login3Component implements OnInit {

  private subscription: Subscription;
  usuarios= USUARIOS;
  usuario = '';
  clave= '';
  progreso: number;
  progresoMensaje="esperando..."; 
  logeando=true;
  ProgresoDeAncho:string;

  clase="progress-bar progress-bar-info progress-bar-striped ";

  constructor(
    private route: ActivatedRoute,
    private router: Router, private serviceLogin:AuthService  )
     {
      this.progreso=0;
      this.ProgresoDeAncho="0%";

  }

  ngOnInit() {
    console.log(this.usuarios);
    localStorage.clear();
  }

  Entrar() {
    /*
    if (this.usuario === 'admin' && this.clave === 'admin') {

      this.router.navigate(['/simon']);
      console.log("entre");
    }
    */
  if (this.serviceLogin.login(this.usuario, this.clave)){
    this.router.navigate(['/menu']);
      console.log("entre");
  }else{
    alert("Ingreso mal su usuario y contraseña");
  }
  
   /*  for(let i =0; i<this.usuarios.length; i++) {
       if(this.usuario === this.usuarios[i].usuario &&
        this.clave === this.usuarios[i].contras ) {
            this.router.navigate(['/home']);
            //this.usuarios[i].
            localStorage.setItem('jugador', JSON.stringify(this.usuarios[i]));
            console.log("entre");
          } 
         
    } */
   //si no encontro a ningun usuario con ese nombre y pass
   //que muestre un texto

  }
  MoverBarraDeProgreso() {
    
    this.logeando=false;
    this.clase="progress-bar progress-bar-danger progress-bar-striped active";
    this.progresoMensaje="NSA spy..."; 
    let _timer = timer(200, 50);
    this.subscription = _timer.subscribe(t => {
      console.log("inicio");
      this.progreso=this.progreso+1;
      this.ProgresoDeAncho=this.progreso+20+"%";
      switch (this.progreso) {
        case 15:
        this.clase="progress-bar progress-bar-warning progress-bar-striped active";
        this.progresoMensaje="Verificando ADN..."; 
          break;
        case 30:
          this.clase="progress-bar progress-bar-Info progress-bar-striped active";
          this.progresoMensaje="Adjustando encriptaciÃ³n.."; 
          break;
          case 60:
          this.clase="progress-bar progress-bar-success progress-bar-striped active";
          this.progresoMensaje="Recompilando Info del dispositivo..";
          break;
          case 75:
          this.clase="progress-bar progress-bar-success progress-bar-striped active";
          this.progresoMensaje="Recompilando claves facebook, gmail, chats..";
          break;
          case 85:
          this.clase="progress-bar progress-bar-success progress-bar-striped active";
          this.progresoMensaje="Instalando KeyLogger..";
          break;
          
        case 100:
          console.log("final");
          
          this.subscription.unsubscribe();
          //this.router.navigate(['/simon']);
          this.Entrar();
          break;
      }     
    });
    //this.Entrar();
    //this.logeando=true;
  }

}
