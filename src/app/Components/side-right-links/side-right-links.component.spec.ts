import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideRightLinksComponent } from './side-right-links.component';

describe('SideRightLinksComponent', () => {
  let component: SideRightLinksComponent;
  let fixture: ComponentFixture<SideRightLinksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SideRightLinksComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SideRightLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
