import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FilterComponent } from './filter/filter.component';
import { FlightListComponent } from './flight-list/flight-list.component';
import { FlightItemComponent } from './flight-item/flight-item.component';
import { TicketsPageComponent } from './tickets-page/tickets-page.component';

import { LOCALE_ID } from '@angular/core';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FilterComponent,
    FlightListComponent,
    FlightItemComponent,
    TicketsPageComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [{ provide: LOCALE_ID, useValue: "ru-RU" }],
  bootstrap: [AppComponent]
})
export class AppModule { }
