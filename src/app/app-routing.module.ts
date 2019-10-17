import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import { MenuPrincipal2Component } from './menu-principal2/menu-principal2.component';
import { AnagramaComponent } from './anagrama/anagrama.component';
import { AgilidadaritmeticaComponent } from './agilidadaritmetica/agilidadaritmetica.component';
import { PiedrapapeltijeraComponent } from './piedrapapeltijera/piedrapapeltijera.component';
import { PrimosComponent } from './primos/primos.component';
import { ListadojugadoresComponent } from './listadojugadores/listadojugadores.component';
import { SobremiComponent } from './sobremi/sobremi.component';
//import { MenuPrincipal3Component } from './menu-principal3/menu-principal3.component';
//import { MenuPrincipal4Component } from './menu-principal4/menu-principal4.component';
import { AuthGuard } from './auth/auth.guard';
import { Login3Component } from './login3/login3.component';
import { Menu3Component } from './menu3/menu3.component';
//import { Menu3Component } from './menu3/menu3.component';


const routes: Routes = [
  // {path:  'home', component: Menuprincipal2Component},
  // {path: '' , component: MenuPrincipal2Component, pathMatch: 'full'},
   
   {path: 'menu' , component: Menu3Component , pathMatch: 'full', canActivate: [AuthGuard]},
   {path: 'login', component:Login3Component },
   {path: 'anagrama' , component:AnagramaComponent, canActivate: [AuthGuard]},
   {path: 'agilidadaritmetica', component: AgilidadaritmeticaComponent, canActivate: [AuthGuard]},
   {path: 'piedrapapeltijera' , component:PiedrapapeltijeraComponent, canActivate: [AuthGuard] },
   {path: 'primos', component:PrimosComponent, canActivate: [AuthGuard] },
   {path: 'listadojugadores', component: ListadojugadoresComponent, canActivate: [AuthGuard] },
   //Login2Component
  // {path: 'login2', component:Login2Component },
   
   {path: 'sobremi', component: SobremiComponent, canActivate: [AuthGuard]},
   {path: '' , component: Login3Component, pathMatch: 'full', canActivate: [AuthGuard]}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
