import { Component } from '@angular/core';

import { Cake } from '../../interfaces/cake.interface';
import { landingService } from '../../services/landing.service';

@Component({
  selector: 'cakes-page',
  templateUrl: './cakes-page.component.html',
  styleUrls: ['./cakes-page.component.css']
})
export class CakesPageComponent {

  public tortas:Cake=this.service.tortas;

  constructor( private service:landingService){}

}
