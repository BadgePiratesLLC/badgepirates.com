import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { routing } from './main.routing';
import { MainComponent } from './main.component';
import { HomeComponent } from './home/home.component';
import { OrderComponent } from './order/order.component';
import { AboutComponent } from './about/about.component';
import { BadgesComponent } from './badges/badges.component';
import { ContactComponent } from './contact/contact.component'
import { FooterComponent } from './footer/footer.component'
import { ThreejsAnimationComponent } from './threejs-animation/threejs-animation.component'

@NgModule({
  declarations: [
    MainComponent,
    HomeComponent,
    AboutComponent,
    BadgesComponent,
    ContactComponent,
    FooterComponent,
    OrderComponent,
    ThreejsAnimationComponent,
  ],
  imports: [
    routing,
    BrowserModule,
    HttpClientModule,
  ],
  providers: [],
})
export class MainModule { }
