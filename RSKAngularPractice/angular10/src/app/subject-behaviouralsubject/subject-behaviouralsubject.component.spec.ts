import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectBehaviouralsubjectComponent } from './subject-behaviouralsubject.component';

describe('SubjectBehaviouralsubjectComponent', () => {
  let component: SubjectBehaviouralsubjectComponent;
  let fixture: ComponentFixture<SubjectBehaviouralsubjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubjectBehaviouralsubjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectBehaviouralsubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
