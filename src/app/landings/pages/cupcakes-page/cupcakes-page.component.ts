import { Component } from '@angular/core';
import { Cake } from '../../interfaces/cake.interface';
import { landingService } from '../../services/landing.service';

@Component({
  selector: 'cupcakes-page',
  templateUrl: './cupcakes-page.component.html',
  styleUrls: ['./cupcakes-page.component.css']
})
export class CupcakesPageComponent {

  public cupcakes:Cake=this.service.cupcakes;

  constructor( private service:landingService){}
}
