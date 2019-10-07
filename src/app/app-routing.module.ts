import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuPrincipal2Component } from './menu-principal2/menu-principal2.component';
import { AnagramaComponent } from './anagrama/anagrama.component';
import { AgilidadaritmeticaComponent } from './agilidadaritmetica/agilidadaritmetica.component';


const routes: Routes = [
  // {path:  'home', component: Menuprincipal2Component},
   {path: '' , component: MenuPrincipal2Component},
   
   {path: 'anagrama' , component:AnagramaComponent},
   {path: 'agilidadaritmetica', component: AgilidadaritmeticaComponent}
   //{path: 'piedrapapeltijera' , component:PiedrapapeltijeraComponent},
   //{path: 'agilidadaritmetica' , component:AgilidadaritmeticaComponent},
   //{path: 'tateti' , component:TatetiComponent},
  
   //Login2Component
  // {path: 'login2', component:Login2Component },
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
