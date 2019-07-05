import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormRadioBtnComponent } from './form-radio-btn.component';

describe('FormRadioBtnComponent', () => {
  let component: FormRadioBtnComponent;
  let fixture: ComponentFixture<FormRadioBtnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormRadioBtnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormRadioBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
