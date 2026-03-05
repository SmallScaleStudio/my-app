import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterpolationDataBindingComponent } from './interpolation-data-binding.component';

describe('InterpolationDataBindingComponent', () => {
  let component: InterpolationDataBindingComponent;
  let fixture: ComponentFixture<InterpolationDataBindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InterpolationDataBindingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InterpolationDataBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
