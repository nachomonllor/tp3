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

@NgModule({
  declarations: [
    AppComponent,
    MenuPrincipal2Component,
    AnagramaComponent,
    AgilidadaritmeticaComponent,
  
    PiedrapapeltijeraComponent,
  
    PrimosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
