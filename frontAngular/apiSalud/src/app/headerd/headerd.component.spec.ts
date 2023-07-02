import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderdComponent } from './headerd.component';

describe('HeaderdComponent', () => {
  let component: HeaderdComponent;
  let fixture: ComponentFixture<HeaderdComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderdComponent]
    });
    fixture = TestBed.createComponent(HeaderdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
