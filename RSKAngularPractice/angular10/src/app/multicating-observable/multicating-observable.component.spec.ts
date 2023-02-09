import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MulticatingObservableComponent } from './multicating-observable.component';

describe('MulticatingObservableComponent', () => {
  let component: MulticatingObservableComponent;
  let fixture: ComponentFixture<MulticatingObservableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MulticatingObservableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MulticatingObservableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
