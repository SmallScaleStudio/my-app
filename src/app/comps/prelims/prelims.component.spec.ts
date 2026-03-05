import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrelimsComponent } from './prelims.component';

describe('PrelimsComponent', () => {
  let component: PrelimsComponent;
  let fixture: ComponentFixture<PrelimsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrelimsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrelimsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
