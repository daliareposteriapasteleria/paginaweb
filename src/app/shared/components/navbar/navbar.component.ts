import { Component, OnChanges } from '@angular/core';

@Component({
  selector: 'shared-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  public viewportOffset = window.scrollY;


  toggleMenu(): void {

    const element = document.getElementById("hamburger-menu");

    element!.classList.toggle("show");

  }

  




}
