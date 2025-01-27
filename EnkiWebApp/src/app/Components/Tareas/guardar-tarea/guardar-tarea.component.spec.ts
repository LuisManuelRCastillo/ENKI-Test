import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuardarTareaComponent } from './guardar-tarea.component';

describe('GuardarTareaComponent', () => {
  let component: GuardarTareaComponent;
  let fixture: ComponentFixture<GuardarTareaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GuardarTareaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuardarTareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
