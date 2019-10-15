import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-principal3',
  templateUrl: './menu-principal3.component.html',
  styleUrls: ['./menu-principal3.component.css']
})
export class MenuPrincipal3Component implements OnInit {

  constructor() { }

   myFunction() {
    let x = document.getElementById("myTopnav") as HTMLElement;
    if (x.className === "topnav") {
      x.className += " responsive";
    } /*else {
      x.className = "topnav";
    }*/
  }

  ngOnInit() {
  }

}
