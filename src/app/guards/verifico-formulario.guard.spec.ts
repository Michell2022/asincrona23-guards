import { TestBed } from '@angular/core/testing';

import { VerificoFormularioGuard } from './verifico-formulario.guard';

describe('VerificoFormularioGuard', () => {
  let guard: VerificoFormularioGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(VerificoFormularioGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
