import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoDispositivos } from './listado-dispositivos';

describe('ListadoDispositivos', () => {
  let component: ListadoDispositivos;
  let fixture: ComponentFixture<ListadoDispositivos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListadoDispositivos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListadoDispositivos);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
