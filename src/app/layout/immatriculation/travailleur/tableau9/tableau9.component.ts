import { Component, OnInit } from '@angular/core';
import { ImmaPathService } from 'src/app/shared/services/immatriculation/imma-path.service';

@Component({
  selector: 'app-tableau9',
  templateUrl: './tableau9.component.html',
  styleUrls: ['./tableau9.component.css']
})
export class Tableau9Component implements OnInit {

  constructor(
    private immaPathService: ImmaPathService,
  ) { }

  ngOnInit(): void {
    this.immaPathService.ontActiveLiensTravailleur();
  }

}
