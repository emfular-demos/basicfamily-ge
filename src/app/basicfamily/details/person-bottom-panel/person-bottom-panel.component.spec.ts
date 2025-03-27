import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonBottomPanelComponent } from './person-bottom-panel.component';

describe('PersonBottomPanelComponent', () => {
  let component: PersonBottomPanelComponent;
  let fixture: ComponentFixture<PersonBottomPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersonBottomPanelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonBottomPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
