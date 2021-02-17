import { Component, OnInit } from '@angular/core';
declare var $:any;

@Component({
  selector: 'app-tous-tableaux-employeur',
  templateUrl: './tous-tableaux-employeur.component.html',
  styleUrls: ['./tous-tableaux-employeur.component.css']
})
export class TousTableauxEmployeurComponent implements OnInit {

  constructor() { 
    $(".active-menu").removeClass("active-menu");
    //$("#allTableLink").addClass("active-menu");
    $("#tEmployeur2").addClass("active-menu");
  }

  ngOnInit(): void {
    $(".active-menu").removeClass("active-menu");
    //$("#allTableLink").addClass("active-menu");
    $("#tEmployeur2").addClass("active-menu");
  }

  

}
