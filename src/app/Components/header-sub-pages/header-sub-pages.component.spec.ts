import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderSubPagesComponent } from './header-sub-pages.component';

describe('HeaderSubPagesComponent', () => {
  let component: HeaderSubPagesComponent;
  let fixture: ComponentFixture<HeaderSubPagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderSubPagesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeaderSubPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
