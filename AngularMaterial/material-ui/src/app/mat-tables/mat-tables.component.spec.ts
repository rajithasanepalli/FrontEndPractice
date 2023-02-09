import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatTablesComponent } from './mat-tables.component';

describe('MatTablesComponent', () => {
  let component: MatTablesComponent;
  let fixture: ComponentFixture<MatTablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatTablesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatTablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
