import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuardarUsuariosComponent } from './guardar-usuarios.component';

describe('GuardarUsuariosComponent', () => {
  let component: GuardarUsuariosComponent;
  let fixture: ComponentFixture<GuardarUsuariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GuardarUsuariosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuardarUsuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
