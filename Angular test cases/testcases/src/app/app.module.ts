import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { TicketReservationComponent } from './ticket-reservation/ticket-reservation.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    TicketReservationComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
