import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {APP_BASE_HREF} from '@angular/common';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainModule } from './pages/main/main.module';
import { DeliveryComponent } from './pages/delivery/delivery.component';
import { routing }  from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DeliveryComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MainModule,
    routing,
  ],
  providers: [{provide: APP_BASE_HREF, useValue: '/'}],
  bootstrap: [AppComponent],
})
export class AppModule { }
