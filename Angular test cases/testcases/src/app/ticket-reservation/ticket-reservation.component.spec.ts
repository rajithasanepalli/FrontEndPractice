import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketReservationComponent } from './ticket-reservation.component';

describe('TicketReservationComponent', () => {
  let component: TicketReservationComponent;
  let fixture: ComponentFixture<TicketReservationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TicketReservationComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketReservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

describe('Bus Ticket reservation', () => {
  it('Ticket reservation done or not', () => {
    //arrange
    let Reservation = new TicketReservationComponent();
    //act
    let isReserved = Reservation.reserveSeat();
    //assert
    expect(isReserved).toBeTruthy();
  })
})
