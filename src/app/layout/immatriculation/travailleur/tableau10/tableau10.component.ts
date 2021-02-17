import { Component, OnInit } from '@angular/core';
import { ImmaPathService } from 'src/app/shared/services/immatriculation/imma-path.service';

@Component({
  selector: 'app-tableau10',
  templateUrl: './tableau10.component.html',
  styleUrls: ['./tableau10.component.css']
})
export class Tableau10Component implements OnInit {

  constructor(
    private immaPathService: ImmaPathService,
  ) { }

  ngOnInit(): void {
    this.immaPathService.ontActiveLiensTravailleur();
  }

}
