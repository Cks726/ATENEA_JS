import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfildComponent } from './perfild.component';

describe('PerfildComponent', () => {
  let component: PerfildComponent;
  let fixture: ComponentFixture<PerfildComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PerfildComponent]
    });
    fixture = TestBed.createComponent(PerfildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
