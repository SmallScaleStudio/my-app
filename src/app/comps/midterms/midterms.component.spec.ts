import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MidtermsComponent } from './midterms.component';

describe('MidtermsComponent', () => {
  let component: MidtermsComponent;
  let fixture: ComponentFixture<MidtermsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MidtermsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MidtermsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
