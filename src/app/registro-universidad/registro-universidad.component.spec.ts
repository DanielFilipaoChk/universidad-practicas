import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroUniversidadComponent } from './registro-universidad.component';

describe('RegistroUniversidadComponent', () => {
  let component: RegistroUniversidadComponent;
  let fixture: ComponentFixture<RegistroUniversidadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistroUniversidadComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistroUniversidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
