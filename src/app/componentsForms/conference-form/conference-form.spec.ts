import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConferenceForm } from './conference-form';

describe('ConferenceForm', () => {
  let component: ConferenceForm;
  let fixture: ComponentFixture<ConferenceForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConferenceForm],
    }).compileComponents();

    fixture = TestBed.createComponent(ConferenceForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
