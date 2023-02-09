import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchCountryObesrvableComponent } from './search-country-obesrvable.component';

describe('SearchCountryObesrvableComponent', () => {
  let component: SearchCountryObesrvableComponent;
  let fixture: ComponentFixture<SearchCountryObesrvableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchCountryObesrvableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchCountryObesrvableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
