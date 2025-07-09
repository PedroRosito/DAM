import { TestBed } from '@angular/core/testing';

import { Dispositivo } from './dispositivo';

describe('Dispositivo', () => {
  let service: Dispositivo;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Dispositivo);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
