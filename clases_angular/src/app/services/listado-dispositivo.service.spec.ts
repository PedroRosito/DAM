import { TestBed } from '@angular/core/testing';

import { ListadoDispositivoService } from './listado-dispositivo.service';

describe('ListadoDispositivoService', () => {
  let service: ListadoDispositivoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListadoDispositivoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
