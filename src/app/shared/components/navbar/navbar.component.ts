import { Component, OnChanges } from '@angular/core';
import { landingService } from 'src/app/landings/services/landing.service';

@Component({
  selector: 'shared-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {


  constructor(private service: landingService) { }


  displayMenu(): void {

    this.service.toggleMenu();

  }

  backHome(): void {

    if (document.getElementsByClassName("show").length > 0)

      this.service.toggleMenu();

  }



}
