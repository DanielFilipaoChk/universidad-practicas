import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosUniversidadComponent } from './datos-universidad.component';

describe('DatosUniversidadComponent', () => {
  let component: DatosUniversidadComponent;
  let fixture: ComponentFixture<DatosUniversidadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DatosUniversidadComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatosUniversidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
