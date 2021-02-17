import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  static RESOURCE_SERVER_URL= "http://192.168.8.172:8090/";
  static AUTHORIZATION_SERVER_URL="http://localhost:9002";

  constructor() { }

  ngOnInit(): void {
  }

}
