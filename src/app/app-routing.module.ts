import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuPrincipal2Component } from './menu-principal2/menu-principal2.component';
import { AnagramaComponent } from './anagrama/anagrama.component';
import { AgilidadaritmeticaComponent } from './agilidadaritmetica/agilidadaritmetica.component';
import { PiedrapapeltijeraComponent } from './piedrapapeltijera/piedrapapeltijera.component';
import { PrimosComponent } from './primos/primos.component';
import { ListadojugadoresComponent } from './listadojugadores/listadojugadores.component';
import { SobremiComponent } from './sobremi/sobremi.component';


const routes: Routes = [
  // {path:  'home', component: Menuprincipal2Component},
   {path: '' , component: MenuPrincipal2Component, pathMatch: 'full'},
   
   {path: 'anagrama' , component:AnagramaComponent},
   {path: 'agilidadaritmetica', component: AgilidadaritmeticaComponent},
   {path: 'piedrapapeltijera' , component:PiedrapapeltijeraComponent},
   {path: 'primos', component:PrimosComponent },
   //{path: 'agilidadaritmetica' , component:AgilidadaritmeticaComponent},
   //{path: 'tateti' , component:TatetiComponent},
  {path: 'listadojugadores', component: ListadojugadoresComponent},
   //Login2Component
  // {path: 'login2', component:Login2Component },
   {path: 'sobremi', component: SobremiComponent}
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
