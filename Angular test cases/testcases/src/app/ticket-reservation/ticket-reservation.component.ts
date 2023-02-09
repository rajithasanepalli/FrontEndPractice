import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ticket-reservation',
  templateUrl: './ticket-reservation.component.html',
  styleUrls: ['./ticket-reservation.component.css']
})
export class TicketReservationComponent implements OnInit {
  public busCapacity = 50;
  public peopleCount = 20;
  constructor() { }

  ngOnInit(): void {
  }

  reserveSeat(): boolean {
    let seatReserved = false;
    if (this.peopleCount <= this.busCapacity) {
      this.peopleCount++;
      seatReserved = true;
    }
    return seatReserved;

  }

}
