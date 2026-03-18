import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonChoiceComponent } from './person-choice.component';

describe('PersonChoiceComponent', () => {
  let component: PersonChoiceComponent;
  let fixture: ComponentFixture<PersonChoiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersonChoiceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonChoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
