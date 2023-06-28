import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilpComponent } from './perfilp.component';

describe('PerfilpComponent', () => {
  let component: PerfilpComponent;
  let fixture: ComponentFixture<PerfilpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PerfilpComponent]
    });
    fixture = TestBed.createComponent(PerfilpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
