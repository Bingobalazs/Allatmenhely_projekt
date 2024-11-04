import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EgerkeComponent } from './egerke.component';

describe('EgerkeComponent', () => {
  let component: EgerkeComponent;
  let fixture: ComponentFixture<EgerkeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EgerkeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EgerkeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
