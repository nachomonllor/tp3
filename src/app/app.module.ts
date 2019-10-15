import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuPrincipal2Component } from './menu-principal2/menu-principal2.component';
import { AnagramaComponent } from './anagrama/anagrama.component';
import { FormsModule } from '@angular/forms';
import { AgilidadaritmeticaComponent } from './agilidadaritmetica/agilidadaritmetica.component';
import { PiedrapapeltijeraComponent } from './piedrapapeltijera/piedrapapeltijera.component';
import { PrimosComponent } from './primos/primos.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListadojugadoresComponent } from './listadojugadores/listadojugadores.component';
import { SobremiComponent } from './sobremi/sobremi.component';
import { MenuPrincipal3Component } from './menu-principal3/menu-principal3.component';
import { MenuPrincipal4Component } from './menu-principal4/menu-principal4.component';
import { Login3Component } from './login3/login3.component';
import { AuthService } from './auth/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    MenuPrincipal2Component,
    AnagramaComponent,
    AgilidadaritmeticaComponent,
  
    PiedrapapeltijeraComponent,
  
    PrimosComponent,
  
    ListadojugadoresComponent,
  
    SobremiComponent,
  
    MenuPrincipal3Component,
  
    MenuPrincipal4Component,
  
    Login3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [AuthService], //servicios
  bootstrap: [AppComponent]
})
export class AppModule { }
