import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SochialLinkComponent } from './sochial-link.component';

describe('SochialLinkComponent', () => {
  let component: SochialLinkComponent;
  let fixture: ComponentFixture<SochialLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SochialLinkComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SochialLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
