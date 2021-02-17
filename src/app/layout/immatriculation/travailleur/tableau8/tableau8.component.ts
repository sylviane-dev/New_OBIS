import { Component, OnInit } from '@angular/core';
import { ImmaPathService } from 'src/app/shared/services/immatriculation/imma-path.service';

@Component({
  selector: 'app-tableau8',
  templateUrl: './tableau8.component.html',
  styleUrls: ['./tableau8.component.css']
})
export class Tableau8Component implements OnInit {

  constructor(
    private immaPathService: ImmaPathService,
  ) { }

  ngOnInit(): void {
    this.immaPathService.ontActiveLiensTravailleur();
  }

}
