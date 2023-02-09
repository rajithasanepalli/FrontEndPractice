import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartsTypesComponent } from './charts-types.component';

describe('ChartsTypesComponent', () => {
  let component: ChartsTypesComponent;
  let fixture: ComponentFixture<ChartsTypesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartsTypesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartsTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
