import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchCountryPromiseComponent } from './search-country-promise.component';

describe('SearchCountryPromiseComponent', () => {
  let component: SearchCountryPromiseComponent;
  let fixture: ComponentFixture<SearchCountryPromiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchCountryPromiseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchCountryPromiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
