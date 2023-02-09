import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromisesObservablesComponent } from './promises-observables.component';

describe('PromisesObservablesComponent', () => {
  let component: PromisesObservablesComponent;
  let fixture: ComponentFixture<PromisesObservablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PromisesObservablesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PromisesObservablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
