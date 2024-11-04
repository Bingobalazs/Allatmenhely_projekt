import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SovjettengeralattjaroComponent } from './sovjettengeralattjaro.component';

describe('SovjettengeralattjaroComponent', () => {
  let component: SovjettengeralattjaroComponent;
  let fixture: ComponentFixture<SovjettengeralattjaroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SovjettengeralattjaroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SovjettengeralattjaroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
