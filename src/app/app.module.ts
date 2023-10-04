import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { CakesPageComponent } from './landings/pages/cakes-page/cakes-page.component';
import { CupcakesPageComponent } from './landings/pages/cupcakes-page/cupcakes-page.component';
import { CustomersPageComponent } from './landings/pages/customers-page/customers-page.component';
import { ContactPageComponent } from './landings/pages/contact-page/contact-page.component';
import { HomePageComponent } from './landings/pages/home-page/home-page.component';
import { CardComponent } from './shared/components/card/card.component';
import { SliderComponent } from './shared/components/slider/slider.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavbarComponent,
    CakesPageComponent,
    CupcakesPageComponent,
    CustomersPageComponent,
    ContactPageComponent,
    CardComponent,
    SliderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
