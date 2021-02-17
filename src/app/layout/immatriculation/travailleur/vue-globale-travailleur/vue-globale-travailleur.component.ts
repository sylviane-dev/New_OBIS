import { Component, OnInit } from '@angular/core';
import { ImmaPathService } from 'src/app/shared/services/immatriculation/imma-path.service';

@Component({
  selector: 'app-vue-globale-travailleur',
  templateUrl: './vue-globale-travailleur.component.html',
  styleUrls: ['./vue-globale-travailleur.component.css']
})
export class VueGlobaleTravailleurComponent implements OnInit {

  constructor(
    private immaPathService: ImmaPathService
  ) { }

  ngOnInit(): void {
    this.immaPathService.ontActiveLiensTravailleur();
  }

}
