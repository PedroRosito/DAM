import { TestBed } from '@angular/core/testing';

import { ListadoDispositivosService } from './listado-dispositivos.service';

describe('ListadoDispositivosService', () => {
  let service: ListadoDispositivosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListadoDispositivosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
