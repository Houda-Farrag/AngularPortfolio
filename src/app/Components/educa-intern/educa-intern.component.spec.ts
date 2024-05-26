import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducaInternComponent } from './educa-intern.component';

describe('EducaInternComponent', () => {
  let component: EducaInternComponent;
  let fixture: ComponentFixture<EducaInternComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EducaInternComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EducaInternComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
