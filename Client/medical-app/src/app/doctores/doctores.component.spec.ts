import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctoresAppComponent } from './doctores.component';

describe('DoctoresAppComponent', () => {
  let component: DoctoresAppComponent;
  let fixture: ComponentFixture<DoctoresAppComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DoctoresAppComponent]
    });
    fixture = TestBed.createComponent(DoctoresAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
